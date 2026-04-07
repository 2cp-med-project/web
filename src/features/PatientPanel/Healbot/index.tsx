import { ChatPanel } from "./ChatPanel/index.tsx";
import { ConversationPanel } from "./ConversationPanel/index.tsx";
import { HealbotContextProvider } from "./context.tsx";

function HealbotContent() {
  return (
    <section className="h-full overflow-hidden rounded-[30px] border border-[#d8efe8] bg-white shadow-[0_24px_60px_-48px_rgba(22,95,76,0.6)]">
      <div className="flex h-full">
        <ConversationPanel />
        <ChatPanel />
      </div>
    </section>
  );
}

export function Healbot() {
  return (
    <HealbotContextProvider>
      <HealbotContent />
    </HealbotContextProvider>
  );
}
