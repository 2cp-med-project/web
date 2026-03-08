import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  ChatDetails,
  ChatWindow,
  ContactList,
  useChatContext,
} from "@/features/Chat";
import React from "react";

export function ChatPage() {
  const { isDetailsPanelOpen } = useChatContext();

  return (
    <section className="h-full">
      <ResizablePanelGroup
        orientation="horizontal"
        className="min-h-50 rounded-lg w-full space-x-2"
      >
        {/* Left panel: contacts */}
        <ResizablePanel defaultSize="25%" minSize={300} maxSize={400}>
          <ContactList />
        </ResizablePanel>

        <ResizableHandle />

        {/* Middle panel: chat */}
        <ResizablePanel defaultSize={50} minSize={300}>
          <ChatWindow />
        </ResizablePanel>

        {isDetailsPanelOpen && (
          <React.Fragment>
            <ResizableHandle />
            {/* Right panel: info */}
            <ResizablePanel defaultSize="25%" minSize={300} maxSize={400}>
              <ChatDetails />
            </ResizablePanel>
          </React.Fragment>
        )}
      </ResizablePanelGroup>
    </section>
  );
}
