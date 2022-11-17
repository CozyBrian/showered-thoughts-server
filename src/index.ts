require('dotenv').config();
import http from "http";
import app from "./app";
import pool from "./services/postgres";

const PORT = process.env.PORT || 3001;

const server = http.createServer(app);

function startServer() {
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });

}
pool.connect();

startServer();
