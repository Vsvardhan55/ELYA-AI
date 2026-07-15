import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatApiService {

  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createChat() {
    return this.http.post(`${this.api}/chats`, {});
  }

  getChats() {
    return this.http.get<any>(`${this.api}/chats`);
  }

  sendMessage(chatId: string, message: string) {
    return this.http.post(
      `${this.api}/chats/${chatId}/message`,
      { message }
    );
  }
}
