import { Chats } from "../imports/collections/chats";

Meteor.methods({
  addChat(title: string, optional?: string) {
    Chats.insert({title, optional});
  }
});