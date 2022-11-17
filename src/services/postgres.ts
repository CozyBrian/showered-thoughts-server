require('dotenv').config({path:__dirname+'/../.env'})
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false
});

export default pool;