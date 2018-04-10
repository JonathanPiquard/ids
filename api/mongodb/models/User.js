import { mongodb } from '../../../databases';

import { Schema } from 'mongoose';
import EmailSchema from './utils/EmailSchema';


const UserSchema = new Schema({
  name: { type: String, required: true },
  email: EmailSchema,
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});

const User = mongodb.model('User', UserSchema);


export default User
