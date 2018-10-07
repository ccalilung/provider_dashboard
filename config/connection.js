var Sequelize = require("sequelize");
require("dotenv").config();

module.exports = {
    
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql",
      "transport_email": "transport_email",
      "transport_pass":"transport_pass"
    }
  }