require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'shower_thoughts',
  password: 'tesla',
  port: 5432,
});

module.exports = pool;