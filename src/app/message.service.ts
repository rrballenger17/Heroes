import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

    messages: string[] = [];

    isEmpty(): boolean {
      return this.messages.length === 0;
    }

    add(message: string) {
      this.messages.push(message);
    }

    clear() {
      this.messages = [];
    }

}
