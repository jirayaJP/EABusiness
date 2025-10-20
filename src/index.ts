import express, { Request, Response } from "express";
import sql from "mssql";

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


app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});