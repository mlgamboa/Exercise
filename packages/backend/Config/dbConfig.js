const mysql = require('mysql');

const connectionConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'inventory',
};

exports.dbConnection = mysql.createConnection(connectionConfig);
