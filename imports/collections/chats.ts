export const Chats = new Mongo.Collection('chats');

if (Meteor.isServer) {
  Meteor.publish('chats-reactive-subscription', function() {
    return Chats.find();
  });
}