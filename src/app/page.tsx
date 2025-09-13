'use client';

import { Conversation } from '@/components/ai-elements/conversation';
import { Message } from '@/components/ai-elements/message';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">AI Agent Sandbox</h1>
      <div className="w-full max-w-2xl">
        <Conversation>
          <Message
            author="user"
            content="Hello, who are you?"
            avatar="⚉"
          />
          <Message
            author="assistant"
            content="I am an AI assistant. How can I help you today?"
            avatar="⚈"
          />
        </Conversation>
      </div>
    </main>
  );
}
