
// Mongoose is a mongodb object modeling for Node.js. Almost every Node.js delevoper uses Mongoose.
import mongoose from 'mongoose';
import express from 'express';

import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
mongoose.connect(uris.mongodb);

import controllers from './api/controllers';
import routes from './config/routes';
import { uris } from './config/databases';


app.use(morgan('combined'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//err handling
app.use('/', (req, res, next) => {
  res.resolve = (err) => (err.status) ? res.status(err.status).send(err.message) : res.status(500).send(err);
  next();
});

//bind api requests to controllers
routes.forEach(({ method, url, handler }) => {
  const [ controller, action ] = handler.split('.');
  app[method](url, controllers[controller][action]);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
