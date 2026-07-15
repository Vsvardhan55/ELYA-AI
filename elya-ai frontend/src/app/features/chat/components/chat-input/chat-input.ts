import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-input.html',
  styleUrl: './chat-input.scss'
})
export class ChatInput {

  @Output()
  send = new EventEmitter<string>();

  message = '';

  sendMessage(): void {

    const text = this.message.trim();

    if (!text) return;

    this.send.emit(text);

    this.message = '';

  }

  onKeyDown(event: KeyboardEvent): void {

    if (event.key === 'Enter' && !event.shiftKey) {

      event.preventDefault();

      this.sendMessage();

    }

  }

}