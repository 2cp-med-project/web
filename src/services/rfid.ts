interface SerialPort {
  readable: ReadableStream<Uint8Array<ArrayBuffer>> | null;
  writable: WritableStream<Uint8Array<ArrayBuffer>> | null;

  open(options: { baudRate: number }): Promise<void>;

  close(): Promise<void>;
}

interface SerialNavigator extends Navigator {
  serial: {
    requestPort(): Promise<SerialPort>;
  };
}

const serialNavigator = navigator as SerialNavigator;

type RFIDListener = (tag: string) => void;

export type RFIDStatus =
  | "disconnected"
  | "connecting"
  | "connected"
  | "listening"
  | "error";

export class RFIDService {
  private port: SerialPort | null = null;
  private reader: ReadableStreamDefaultReader<Uint8Array<ArrayBuffer>> | null =
    null;

  private decoder = new TextDecoder();

  private listeners = new Set<RFIDListener>();

  private status: RFIDStatus = "disconnected";

  private onStatusChange: ((status: RFIDStatus) => void) | null = null;

  getStatus(): RFIDStatus {
    return this.status;
  }

  setStatus(status: RFIDStatus): void {
    this.status = status;
    this.onStatusChange?.(this.status);
  }

  setStatusChangeHandler(handler: (status: RFIDStatus) => void) {
    this.onStatusChange = handler;
  }

  async connect(baudRate: number = 115200): Promise<void> {
    this.setStatus("connecting");

    try {
      if (!("serial" in serialNavigator)) {
        throw new Error("Web Serial API is not supported.");
      }

      this.port = await serialNavigator.serial.requestPort();

      await this.port.open({
        baudRate,
      });

      this.setStatus("connected");

      this.startListening();
    } catch (error) {
      this.setStatus("error");
    }
  }

  subscribe(listener: RFIDListener): () => void {
    this.listeners.add(listener);

    return () => {
      this.listeners.delete(listener);
    };
  }

  private emit(tag: string): void {
    for (const listener of this.listeners) {
      listener(tag);
    }
  }

  private async startListening(): Promise<void> {
    if (!this.port?.readable || this.getStatus() === "listening") return;

    this.setStatus("listening");

    let buffer = "";

    while (this.port.readable) {
      this.reader = this.port.readable.getReader();

      try {
        while (true) {
          const { value, done } = await this.reader.read();

          if (done) {
            break;
          }

          if (!value) {
            continue;
          }

          buffer += this.decoder.decode(value, {
            stream: true,
          });

          const messages = buffer.split(/\r?\n/);

          buffer = messages.pop() ?? "";

          for (const message of messages) {
            const tag = message.trim();

            if (!tag) {
              continue;
            }

            this.emit(tag);
          }
        }
      } catch (error) {
        console.error("RFID read error:", error);
      } finally {
        this.reader.releaseLock();
      }
    }
  }

  async write(message: string): Promise<void> {
    if (!this.port?.writable) {
      throw new Error("Port is not writable.");
    }

    const writer = this.port.writable.getWriter();

    try {
      const encoder = new TextEncoder();

      await writer.write(encoder.encode(message));
    } finally {
      writer.releaseLock();
    }
  }

  async disconnect(): Promise<void> {
    try {
      await this.reader?.cancel();
    } catch {}

    this.reader?.releaseLock();

    if (this.port) {
      await this.port.close();
    }

    this.reader = null;
    this.port = null;

    this.setStatus("disconnected");
  }
}

export const rfidService = new RFIDService();
