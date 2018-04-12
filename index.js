
// Mongoose is a mongodb object modeling for Node.js. Almost every Node.js delevoper uses Mongoose.
import mongoose from 'mongoose';
import express from 'express';
const app = express();
mongoose.connect(uris.mongodb);

import controllers from './api/controllers';
import routes from './config/routes';
import { uris } from './config/databases';


app.use(express.static('public'));

//err handling
app.use('/', (req, res) => {
  res.resolve = (err) => (err.status) ? res.status(err.status).send(err.message) : res.status(500).send(err);
});

//bind api requests to controllers
routes.forEach(({ method, url, handler }) => {
  const [ controller, action ] = handler.split('.');
  app[method](`/api${url}`, controllers[controller][action]);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
