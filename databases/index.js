import databases, { urls } from '../config/databases';
import { parallel } from 'async';

const handlePromise = (promise) => (callback) => promise.then((db) => callback(null, db)).catch((err) => callback(err));


let databases_connect = {};

databases.forEach((database) => {
  import dbp from `./${database}`;

  databases_connect[database] = handlePromise(dbp(urls[database]));
});

const connect = (callback) => parallel(
  databases_connect,
  (err, databases) => {
    if (err) throw err;

    callback(databases);
  }
)};

export default { connect }
