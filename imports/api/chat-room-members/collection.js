// Imports
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

// Create Collection
let ChatRoomMembers = new Mongo.Collection('chat_room_members');

// Define schema
ChatRoomMembers.schema = new SimpleSchema({
    // _id auto generated

    // Chat room id
    chatRoomId: {
        type: String
    },

    // Chat room member user id
    userId: {
        type: String
    },

    // Chat room member created at date time
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

    // Chat room member updated at date time
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
ChatRoomMembers.attachSchema(ChatRoomMembers.schema);

// Finally, export the Collection
export default ChatRoomMembers