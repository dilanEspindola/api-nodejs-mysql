const mysql = require('mysql');
const { promisify } = require('util');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'dilan',
    port: 3306,
    database: 'api_nodejs'
});

pool.getConnection((error, connection) => {
    if(error) {
        console.log(error);
    }
    else {
        connection.release();
        console.log('DB is connected');
    }
    
});

pool.query = promisify(pool.query);

module.exports = pool;