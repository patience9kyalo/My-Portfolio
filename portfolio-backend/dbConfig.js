const sql = require('mssql');

// MSSQL Database Configuration
const config = {
  user: 'sa', // Your MSSQL username
  password: '31Jan2002',
  server: 'localhost', // Your MSSQL server name
  database: 'PortfolioDB', // Your database name
  options: {
    encrypt: false, // For Windows
    enableArithAbort: true,
  },
};

sql.connect(config)
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Database connection error:', err));

module.exports = sql;
