
import mongop from './mongop';
import postgresp from './postgresp';
import { urls } from '../config/databases';

import { parallel } from 'async';

const extractDatabase = (promise) => (callback) => promise.then((db) => callback(null, db), (err) => callback(err));


const extractors = {
  'mongodb': extractDatabase(mongop(urls.mongodb)),
  'postgresdb': extractDatabase(postgresp(urls.postgresdb))
};

class databases {
  constructor() {
    this.mongodb = null;
    this.postgresdb = null;
  }

  connect(callback) {
    let _this = this;
    parallel(extractors, (err, databases) => {
      if (err) throw err;
      throw new Error('damn1');

      _this.mongodb = databases.mongodb;
      _this.postgresdb = databases.postgresdb;
      callback(databases);
    });
  }

  getMongodb() {
    return this.mongodb;
  }
}

export default new databases()
