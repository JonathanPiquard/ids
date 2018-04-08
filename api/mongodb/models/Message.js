import { Schema } from 'mongoose';


const MessageSchema = new Schema({
  content: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }] //to handle in controller
});

const Message = mongodb.model('Message', MessageSchema);


default export Message
