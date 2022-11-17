require('dotenv').config({path:__dirname+'/../.env'})
import { Pool } from "pg";

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'shower_thoughts',
  password: 'tesla',
  port: 5432,
});

export default pool;