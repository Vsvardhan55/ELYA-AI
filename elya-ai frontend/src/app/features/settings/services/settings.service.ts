import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppSettings } from '../models/settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private readonly STORAGE_KEY = 'elya-ai-settings';

private defaultSettings: AppSettings = {

  theme: 'dark',

  accentColor: '#2563EB',

  ollamaModel: 'llama3:8b',

  temperature: 0.7,

  streaming: true,

  markdown: true,

  codeHighlight: true,

  notifications: true,

  sound: false,

  autoScroll: true,

  fontSize: 15

};

  private settingsSubject =
    new BehaviorSubject<AppSettings>(this.load());

  settings$ = this.settingsSubject.asObservable();

  get settings(): AppSettings {

    return this.settingsSubject.value;

  }

  update(settings: Partial<AppSettings>) {

    const updated = {

      ...this.settings,

      ...settings

    };

    localStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(updated)
    );

    this.settingsSubject.next(updated);

  }

  private load(): AppSettings {

    const stored =
      localStorage.getItem(this.STORAGE_KEY);

    return stored
      ? JSON.parse(stored)
      : this.defaultSettings;

  }

}
