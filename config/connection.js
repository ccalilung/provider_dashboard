var Sequelize = require("sequelize");
require("dotenv").config();

module.exports = {
  "development": {
    username: "root",
    password: "12345678",
    database: "dvcipm",
    host: "localhost",
    "dialect": "mysql"
  },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql",
      "transport_email": "transport_email",
      "transport_pass":"transport_pass"
    }
  }