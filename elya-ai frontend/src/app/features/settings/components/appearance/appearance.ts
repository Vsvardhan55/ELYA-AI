import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SettingsService } from '../../services/settings.service';
import { AppSettings } from '../../models/settings.model';

@Component({
  selector: 'app-appearance',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './appearance.html',
  styleUrl: './appearance.scss'
})
export class AppearanceComponent {

  settings: AppSettings;

  constructor(
    private settingsService: SettingsService
  ) {

    this.settings = {
      ...this.settingsService.settings
    };

  }

  save() {

    this.settingsService.update(this.settings);

  }

}
