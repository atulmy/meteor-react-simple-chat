// Imports
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

// Create Collection
let Chats = new Mongo.Collection('chats');

// Define schema
Chats.schema = new SimpleSchema({
    // _id auto generated

    // Chat room id
    chatRoomId: {
        type: String
    },

    // Chat message sender user id
    userId: {
        type: String
    },

    // Chat message
    message: {
        type: String
    },

    // Chat created at date time
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

    // Chat updated at date time
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
Chats.attachSchema(Chats.schema);

// Finally, export the Collection
export default Chats;