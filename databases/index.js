
import mongop from './mongop';
import postgresp from './postgresp';
import { urls } from '../config/databases';

import { parallel } from 'async';

const extractDatabase = (promise) => (callback) => promise.then((db) => callback(null, db), (err) => callback(err));


const extractors = {
  'mongodb': extractDatabase(mongop(urls.mongodb)),
  'postgresdb': extractDatabase(postgresp(urls.postgresdb))
};

const connect = (callback) => parallel(extractors, (err, databases) => {
  if (err) throw err;
  callback(databases)
});

class databases {
  constructor() {
    const _this = this;
    parallel(extractors, (err, { mongodb, postgresdb }) => {
      if (err) throw err;
      _this.mongodb = mongodb;
      
    });
  }
}

export default { connect }
