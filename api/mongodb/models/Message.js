
import { mongodb } from '../../../databases';
import { Schema } from 'mongoose';

console.log(mongodb);
const MessageSchema = new Schema({
  content: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' }
});


const Message = mongodb.model('Message', MessageSchema);
export default Message
