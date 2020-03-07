var mysql = require('mysql');
var config = require ('config');
var connection = mysql.createConnection({


    host : config.get('mysql.host'),
    port : config.get('mysql.port'),
    user : config.get('mysql.user'),
    password : config.get('mysql.password'),
  database : config.get('mysql.database')
});
connection.connect();

function getConnection()
{
    if(!connection)
    {
        connection.connect();
    }
    return connection;
}
module.exports= {
    getConnection : getConnection
}