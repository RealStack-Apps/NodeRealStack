const PgConnection = require('postgresql-easy');
const dbConfig = require('./config/mongodb');
const pg = new PgConnection(dbConfig);

module.exports = pg;