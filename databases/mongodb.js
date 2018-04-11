
// Mongoose is a mongodb object modeling for Node.js. Almost every Node.js delevoper uses Mongoose.
import mongoose from 'mongoose';
import { uris } from '../config/databases';

export default mongoose.createConnection(uris.mongodb);
