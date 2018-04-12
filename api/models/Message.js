
import mongoose, { Schema } from 'mongoose';

const MessageSchema = new Schema({
  content: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' }
});


const Message = mongoose.model('Message', MessageSchema);
export default Message
