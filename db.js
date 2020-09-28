const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "onlyaim17",
  host: "localhost",
  database: "pernstack",
  port: 5432,
});

module.exports = pool;
