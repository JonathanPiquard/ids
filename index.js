
import express from 'express';
const app = express();

import databases from './databases';
import routes from './config/routes';
import databasesList from './config/databases';


databases.connect(({ mongodb, postgresdb }) => {
  app.use(express.static('public'));

  app.get('/', (req, res) => res.sendfile(__dirname + '/public/index.html'));

  //err handling
  app.use('/', (req, res) => {
    res.resolve = (err) => {
      if (typeof err.status !== 'undefined') {
        this.status(err.status).send(err.message);
      } else {
        console.error(err);
        this.status(500).send(err);
      }
    }
  });

  //bind requests to controllers (api)
  databasesList.forEach((database) => {
    import * as controllers from `./api/${database}/controllers`;

    routes.forEach(({ method, url, controllerAction }) => app[method](
      `/api/${database}${url}`,
      controllerAction(controllers)
    );
  });

  //simulate api calls to each database to benchmark the whole server

  app.listen(3000, () => console.log('Listening on port 3000!'));
});
