require("dotenv").config();

module.exports = {
  client: "pg",
  connection: process.env.DB_URL || {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || "postgres",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
  },  
  pool: {
    min: 2,
    max: 10,
  },
  seeds: {
    directory: "./seeds",
  },
};