import { Meteor } from 'meteor/meteor';
import { Chats } from "../imports/collections/chats";

Meteor.startup(() => {
  if (Chats.find({}).count() === 0) {
    Chats.insert({
      title: 'Ethan Gonzalez'
    });

    Chats.insert({
      title: 'Bryan Wallace'
    });

    Chats.insert({
      title: 'Avery Stewart'
    });

    Chats.insert({
      title: 'Katie Peterson'
    });

    Chats.insert({
      title: 'Ray Edwards'
    });
  }
});