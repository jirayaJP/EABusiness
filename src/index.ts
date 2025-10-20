import express from "express";
import sql from "mssql";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;

const config: sql.config = {
  user: "your_username",
  password: "your_password",
  server: "your_server", // e.g. localhost or IP
  database: "your_database",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

app.get('/', (req, res) => {
    res.send('MS SQL API is running!');
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});