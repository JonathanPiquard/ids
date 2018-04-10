
import express from 'express';
const app = express();

import databases from './databases';
import api from './api';

import routes from './config/routes';


app.use(express.static('public'));

app.get('/', (req, res) => res.sendfile(__dirname + '/public/index.html'));

//err handling
app.use('/', (req, res) => {
  res.resolve = (err) => (err.status) ? res.status(err.status).send(err.message) : res.status(500).send(err);
});

//bind api requests to controllers
routes.forEach(({ method, url, handler }) => {
  const [ controller, action ] = handler.split('.');
  app[method](`/api/mongodb${url}`, api.mongodb.controllers[controller][action]);
  app[method](`/api/postgresdb${url}`, api.postgresdb.controllers[controller][action]);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
