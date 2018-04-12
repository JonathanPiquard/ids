
import mongoose, { Schema } from 'mongoose';


const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const errMessage = 'Invalid email address';

const UserSchema = new Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 20 },
  email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      validate: [ (email) => regex.test(email),  errMessage],
      match: [ regex, errMessage ]
  },
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});

const User = mongoose.model('User', UserSchema);
export default User
