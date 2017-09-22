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
}