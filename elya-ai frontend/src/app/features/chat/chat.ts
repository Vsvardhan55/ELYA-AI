import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatInput } from './components/chat-input/chat-input';
import { EmptyState } from './components/empty-state/empty-state';
import { MessageList } from './components/message-list/message-list';
import { TypingIndicator } from './components/typing-indicator/typing-indicator';

import { Message } from './models/message.model';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    MessageList,
    ChatInput,
    EmptyState,
    TypingIndicator
  ],
  templateUrl: './chat.html',
  styleUrl: './chat.scss'
})
export class Chat implements OnInit {

  messages: Message[] = [];

  isTyping = false;

  constructor(
    private chatService: ChatService
  ) {}

  ngOnInit(): void {

  this.chatService.activeConversation$
    .subscribe(conversation => {

      console.log("Active Conversation:", conversation);

      this.messages = conversation?.messages ?? [];

      console.log("Messages:", this.messages);

    });

  }

  sendMessage(text: string): void {

    console.log("Button clicked");
    console.log(text);

  if (!text.trim()) return;

  const conversation = this.chatService.getActiveConversation();

  if (!conversation) return;

  // Show user message immediately
  this.chatService.sendToAI(conversation.id, text);

  this.isTyping = true;

  this.chatService
    .sendToAI(conversation.id, text)
    .subscribe({

      next: (response: any) => {

        this.chatService.sendMessage(
          response.reply,
          'assistant'
        );

        this.isTyping = false;

      },

      error: (error) => {

        console.error(error);

        this.isTyping = false;

      }

    });

}

}
