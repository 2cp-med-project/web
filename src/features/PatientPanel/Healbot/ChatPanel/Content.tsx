import { cn } from "@/lib/utils.ts";
import type { HealbotConversation, HealbotMessage } from "@/types/healbot.ts";
import { Bot, SendHorizontal, Sparkles } from "lucide-react";

type ChatPanelContentProps = {
  conversation: HealbotConversation;
  draft: string;
  messages: HealbotMessage[];
  patientName: string;
  onDraftChange: (value: string) => void;
  onPromptSelect: (value: string) => void;
  onSend: () => void;
};

export function ChatPanelContent({
  conversation,
  draft,
  messages,
  patientName,
  onDraftChange,
  onPromptSelect,
  onSend,
}: ChatPanelContentProps) {
  return (
    <section className="relative flex min-w-0 flex-1 flex-col overflow-hidden bg-[#eefdf8]">
      <div className="flex items-center gap-4 border-b border-[#d8efe8] bg-white px-5 py-3.5">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-white shadow-[0_12px_30px_-18px_rgba(27,146,113,0.9)]">
          <Bot size={18} />
        </div>

        <div>
          <h1 className="text-lg font-semibold text-[#36433f]">
            {conversation.assistantName}
          </h1>
          <p className="text-sm text-[#65c3a9]">
            • {conversation.assistantStatus}
          </p>
        </div>
      </div>

      <div className="absolute right-[-5rem] top-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(131,239,214,0.45)_0%,_rgba(131,239,214,0.16)_45%,_transparent_70%)]" />
      <div className="absolute bottom-32 right-[-4rem] h-72 w-72 rounded-[45%] bg-[linear-gradient(180deg,_rgba(179,242,222,0.65)_0%,_rgba(58,207,172,0.35)_100%)] blur-[1px]" />

      <div className="relative flex-1 overflow-y-auto px-7 pt-5 pb-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 pb-32">
          {messages.map((message) => {
            const isPatient = message.author === "patient";

            return (
              <div
                key={message.id}
                className={cn(
                  "flex w-full",
                  isPatient ? "justify-end" : "justify-start",
                )}
              >
                <div
                  className={cn(
                    "max-w-[26rem] rounded-[22px] px-5 py-4 shadow-[0_12px_30px_-26px_rgba(28,87,70,0.45)]",
                    isPatient
                      ? "rounded-tr-sm bg-[#67d3bb] text-white"
                      : "rounded-tl-sm bg-white text-foreground",
                  )}
                >
                  <p className="whitespace-pre-line text-[15px] leading-8">
                    {message.content}
                  </p>
                  <p
                    className={cn(
                      "mt-2 text-xs font-medium",
                      isPatient ? "text-white/80" : "text-[#86cdbc]",
                    )}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-[linear-gradient(180deg,rgba(238,253,248,0)_0%,rgba(238,253,248,0.96)_25%,rgba(238,253,248,1)_100%)] px-6 pb-6 pt-14">
        <div className="mx-auto max-w-5xl space-y-3">
          <div className="flex flex-wrap gap-2">
            {conversation.promptOptions.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => onPromptSelect(prompt)}
                className="rounded-full border border-[#d9efe8] bg-white px-3 py-1.5 text-sm text-[#7dbbaa] transition-colors hover:border-[#7ed5c1] hover:text-foreground"
              >
                {prompt}
              </button>
            ))}
          </div>

          <div className="rounded-[24px] border-2 border-[#53c8aa] bg-white px-4 py-3 shadow-[0_18px_40px_-32px_rgba(31,175,135,0.9)]">
            <div className="flex items-center gap-3">
              <div className="hidden h-10 w-10 items-center justify-center rounded-2xl bg-[#eef9f5] text-[#6bc8b5] sm:flex">
                <Sparkles size={18} />
              </div>

              <textarea
                rows={1}
                value={draft}
                onChange={(event) => onDraftChange(event.target.value)}
                placeholder={`Écrivez votre message, ${patientName}...`}
                className="max-h-28 min-h-12 flex-1 resize-none bg-transparent py-2 text-[15px] text-[#40504b] outline-none placeholder:text-[#a5cfc4]"
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
      </div>
    </section>
  );
}
