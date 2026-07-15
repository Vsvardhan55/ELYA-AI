import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly STORAGE_KEY = 'elya-ai-conversations';

  save<T>(data: T): void {

    localStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(data)
    );

  }

  load<T>(): T | null {

    const value = localStorage.getItem(this.STORAGE_KEY);

    if (!value) {

      return null;

    }

    return JSON.parse(value) as T;

  }

  clear(): void {

    localStorage.removeItem(this.STORAGE_KEY);

  }

}
