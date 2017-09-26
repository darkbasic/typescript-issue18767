import { Component } from '@angular/core';
import { MeteorReactive } from "angular2-meteor";
import { Chats } from "../../../imports/collections/chats";

@Component({
  selector: 'app-root',
  styles: [`

  `],
  template: `
      <div>MeteorReactive</div>
      <div *ngFor="let chat of chats">
          <p>Name: {{chat.title}}</p>
      </div>
    <button (click)="addChat()">Add chat</button>
  `
})
export class AppComponent extends MeteorReactive {
  chats;

  constructor() {
    super();

    this.subscribe('chats-reactive-subscription');
    this.chats = Chats.find();
    this.autorun(() => {
      console.log(this.chats.fetch());
    });
  }

  addChat() {
    this.call('addChat', 'My title', 'Not a number', (err, res) => {
      if (err) {
        console.log(err);
      }
    });
  }
}