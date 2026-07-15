import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-list',
  standalone: true,
  templateUrl: './message-list.html',
  styleUrl: './message-list.scss',
})
export class MessageList {

  @Input() messages: any[] = [];

}