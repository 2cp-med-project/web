import { Bot, SendHorizontal, Sparkles } from "lucide-react";

type ChatPanelEmptyProps = {
  draft: string;
  onDraftChange: (value: string) => void;
};

export function ChatPanelEmpty({ draft, onDraftChange }: ChatPanelEmptyProps) {
  const onSend = () => {};

  return (
    <section className="flex min-w-0 flex-1 flex-col justify-center bg-[#eefdf8] px-8">
      <div className="mx-auto max-w-xl rounded-[32px] border border-[#d8efe8] bg-white/80 p-8 text-center shadow-[0_24px_60px_-48px_rgba(22,95,76,0.6)] backdrop-blur-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground text-white">
          <Bot size={22} />
        </div>

        <h2 className="mt-5 text-2xl font-semibold text-[#33403c]">
          Commencez une nouvelle discussion
        </h2>
        <p className="mt-2 text-sm leading-7 text-muted">
          Sélectionnez une conversation existante à gauche ou préparez votre
          prochaine question ici avant de l'envoyer plus tard.
        </p>

        <div className="mt-6 rounded-[24px] border-2 border-[#53c8aa] bg-white px-4 py-3 text-left">
          <div className="flex items-center gap-4">
            <div className="hidden h-10 w-10 items-center justify-center rounded-2xl bg-[#eef9f5] text-[#6bc8b5] sm:flex">
              <Sparkles size={18} />
            </div>

            <textarea
              rows={1}
              value={draft}
              onChange={(event) => onDraftChange(event.target.value)}
              placeholder="Préparez votre prochain message..."
              className="flex-1 resize-none bg-transparent py-2 text-[15px] text-[#40504b] outline-none placeholder:text-[#a5cfc4]"
            />

            <button
              type="button"
              onClick={onSend}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#50c8aa] text-white transition-transform hover:scale-[1.02]"
              aria-label="Envoyer le message"
            >
              <SendHorizontal size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
