import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './components/account/account';
import { AppearanceComponent } from './components/appearance/appearance';
import { AiModelComponent } from './components/ai-model/ai-model';
import { ChatSettingsComponent } from './components/chat-settings/chat-settings';
import { NotificationsComponent } from './components/notifications/notifications';
import { PrivacyComponent } from './components/privacy/privacy';
import { DataControlsComponent } from './components/data-controls/data-controls';
import { AboutComponent } from './components/about/about';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
  CommonModule,

  AccountComponent,
  AppearanceComponent,
  AiModelComponent,
  ChatSettingsComponent,
  NotificationsComponent,
  PrivacyComponent,
  DataControlsComponent,
  AboutComponent
],
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
})
export class SettingsComponent {

  selectedTab:
  | 'account'
  | 'appearance'
  | 'ai'
  | 'chat'
  | 'notifications'
  | 'privacy'
  | 'data'
  | 'about' = 'account';

  changeTab(
  tab:
    | 'account'
    | 'appearance'
    | 'ai'
    | 'chat'
    | 'notifications'
    | 'privacy'
    | 'data'
    | 'about'
) {
  this.selectedTab = tab;
}

}
