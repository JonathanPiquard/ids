import { Schema } from 'mongoose';

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const errMessage = 'Please fill a valid email address';

const EmailSchema = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [ (email) => regex.test(email),  errMessage],
        match: [ regex, errMessage ]
    }
});

export default EmailSchema
