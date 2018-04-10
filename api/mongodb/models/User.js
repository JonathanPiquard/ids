import databases from '../../../databases';

import { Schema } from 'mongoose';
import EmailSchema from './utils/EmailSchema';

  throw new Error('damn2');

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: EmailSchema,
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});

const User = databases.getMongodb().model('User', UserSchema);


export default User
