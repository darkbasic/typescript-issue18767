import { MongoObservable } from "meteor-rxjs";

export const ChatsRxjs = new MongoObservable.Collection('chats');
export const Chats = ChatsRxjs.collection;

Chats.attachSchema({
  title: { type: String, required: true },
  optional: { type: Number, required: false }
});

if (Meteor.isServer) {
  Meteor.publish('chats-reactive-subscription', function() {
    return Chats.find();
  });
}