// Imports
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

// Create Collection
export const ChatRooms = new Mongo.Collection('chat_rooms');

// Define schema
ChatRooms.schema = new SimpleSchema({
    // _id auto generated

    // Chat room creator
    userId: {
        type: String
    },

    // Chat room title
    title: {
        type: String
    },

    // Chat room created at date time
    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            } else {
                this.unset();
            }
        }
    },

    // Chat room updated at date time
    updatedAt: {
        type: Date,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    }
});

// Attach Schema
ChatRooms.attachSchema(ChatRooms.schema);