const { Pool } = require('pg');

const PG_URI =
  'postgres://dasybkfh:AQ2OU8KeXlsUTXmgSrE7eUjV7eq5a5L4@ruby.db.elephantsql.com:5432/dasybkfh';

// hide away URL, dev mode vs production mode.
// const URI = process.env.PG_URI || myURI;

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
