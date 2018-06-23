const mysql = require('mysql');
const db_config = require('./db_config');
const db = mysql.createPool({
    connectionLimit : 10,
    host: db_config.host,
    user: db_config.user,
    password: db_config.password,
    database: db_config.database
});

//var connection;

/*function handleDisconnect() {
    //connection = mysql.createConnection(db_config); // Recreate the connection, since
    const db = mysql.createConnection({
        host: db_config.host,
        user: db_config.user,
        password: db_config.password,
        database: db_config.database
    });
    // the old one cannot be reused.

    db.connect(function (err) { // The server is either down
        if (err) { // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        } // to avoid a hot loop, and to allow our node script to
    }); // process asynchronous requests in the meantime.
    // If you're also serving http, display a 503 error.
    db.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect(); // lost due to either server restart, or a
        } else { // connnection idle timeout (the wait_timeout
            throw err; // server variable configures this)
        }
    });
}
//
handleDisconnect();*/
//
//db.connect(function(err) {
//  if (err) throw err;
//});

module.exports = db;