import mongoose from 'mongoose'; // moongoose is a wrap around mongodb with more features, it is the standard with nodejs

const mongop = (url) => new Promise((resolve, reject) => mongoose.connect(url, (err, db) => {
  if (err) return reject(err);
  resolve(db);
}));

export default mongop
