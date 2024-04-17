const mysql = require("mysql");

const db = mysql.createConnection({
    host: "srv1196.hstgr.io",
    user: "u436441116_mariano",
    password: "T+n8FOHAx?5u",
    database: "u436441116_database"
});

db.connect((err) => {
    if (err) {
        console.log("Error de conexión a la base de datos:", err);
    } else {
        console.log("Conexión exitosa a la base de datos MySQL");
    }
});


module.exports = db;
