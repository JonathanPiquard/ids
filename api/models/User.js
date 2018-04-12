
import mongoose, { Schema } from 'mongoose';
import EmailSchema from './utils/EmailSchema';


const UserSchema = new Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 20 },
  email: EmailSchema,
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});

const User = mongoose.model('User', UserSchema);
export default User
