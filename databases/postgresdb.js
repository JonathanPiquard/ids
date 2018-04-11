
import { Pool } from 'pg';
import { uris } from '../config/databases';

export default new Pool({ connectionString: uris.prostgresdb });
