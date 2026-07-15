import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-settings.html',
  styleUrl: './chat-settings.scss'
})
export class ChatSettingsComponent{

  autoScroll = true;

  showTimestamps = true;

}
