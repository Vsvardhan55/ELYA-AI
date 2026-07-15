import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../../../core/services/storage.service';
import { Conversation } from '../models/conversation.model';
import { Message } from '../models/message.model';
import { ChatApiService } from '../../../core/services/chat-api.service';

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  private conversations: Conversation[] = [];

  private conversationsSubject =
    new BehaviorSubject<Conversation[]>([]);

  conversations$ =
    this.conversationsSubject.asObservable();

  private activeConversationSubject =
    new BehaviorSubject<Conversation | null>(null);

  activeConversation$ =
    this.activeConversationSubject.asObservable();

  constructor(
    private storage: StorageService,
    private chatApi: ChatApiService
    ) {
      this.loadConversations();
  }

private loadConversations(): void {

  this.chatApi.getChats().subscribe({

    next: (response) => {

      this.conversations = response.chats.map((chat: any) => ({

        id: chat._id,

        title: chat.title,

        createdAt: new Date(chat.createdAt),

        updatedAt: new Date(chat.updatedAt),

        pinned: false,

        messages: chat.messages.map((m: any) => ({

          id: crypto.randomUUID(),

          role: m.role,

          content: m.content,

          timestamp: new Date(chat.updatedAt)

        }))

      }));

      this.conversationsSubject.next(this.conversations);

      if (this.conversations.length > 0) {

        this.activeConversationSubject.next(this.conversations[0]);

      } else {

        this.newConversation();

      }

    },

    error: (err) => {

      console.error(err);

    }

  });

}

  private saveConversations(): void {

  this.storage.save(this.conversations);

  }
  sendToAI(chatId: string, message: string) {
  return this.chatApi.sendMessage(chatId, message);
}

  newConversation() {

  this.chatApi.createChat().subscribe({

    next: (response: any) => {

      const chat: Conversation = {

        id: response.chat._id,

        title: response.chat.title,

        createdAt: new Date(response.chat.createdAt),

        updatedAt: new Date(response.chat.updatedAt),

        pinned: false,

        messages: []

      };

      this.conversations.unshift(chat);

      this.conversationsSubject.next([...this.conversations]);

      this.activeConversationSubject.next(chat);

    },

    error: (err) => {

      console.error(err);

    }

  });

}

  getActiveConversation() {

    return this.activeConversationSubject.value;

  }

  selectConversation(id: string) {

    const conversation =
      this.conversations.find(c => c.id === id);

    if (conversation) {

      this.activeConversationSubject.next(conversation);

      this.saveConversations();

    }

  }

  sendMessage(text: string, role: 'user' | 'assistant' = 'user') {

  const conversation = this.activeConversationSubject.value;

  if (!conversation) return;

  const message = {

    id: crypto.randomUUID(),

    role,

    content: text,

    timestamp: new Date()

  };

  conversation.messages.push(message);

  if (role === 'user' && conversation.title === 'New Chat') {

    conversation.title = text.substring(0, 30);

  }

  conversation.updatedAt = new Date();

  this.conversationsSubject.next([...this.conversations]);

  this.activeConversationSubject.next({
    ...conversation
  });

  this.saveConversations();

}
deleteConversation(id:string){

    this.conversations =
        this.conversations.filter(
            c=>c.id!==id
        );

    if(this.conversations.length===0){

        this.newConversation();

        return;

    }

    this.conversationsSubject.next(
        [...this.conversations]
    );

    this.activeConversationSubject.next(
        this.conversations[0]
    );

    this.saveConversations();

  }
  renameConversation(
    id:string,
    title:string
){

    const chat =
        this.conversations.find(
            c=>c.id===id
        );

    if(!chat) return;

    chat.title=title;

    chat.updatedAt=new Date();

    this.conversationsSubject.next(
        [...this.conversations]
    );

    this.saveConversations();

  }
  togglePin(id:string){

    const chat =
        this.conversations.find(
            c=>c.id===id
        );

    if(!chat) return;

    chat.pinned=!chat.pinned;

    this.conversations.sort((a,b)=>{

        if(a.pinned===b.pinned){

            return b.updatedAt.getTime()-a.updatedAt.getTime();

        }

        return Number(b.pinned)-Number(a.pinned);

    });

    this.conversationsSubject.next(
        [...this.conversations]
    );

    this.saveConversations();

  }


}
