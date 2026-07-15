import { Injectable, signal } from '@angular/core';

import { Conversation } from '../models/conversation.model';

@Injectable({
  providedIn: 'root'
})
export class ChatStore {

  conversations = signal<Conversation[]>([]);

  activeConversation = signal<Conversation | null>(null);

  loading = signal(false);

}
