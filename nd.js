// Importa los módulos necesarios
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

// Configura middleware
app.use(cors());
app.use(express.json());

// Configura la conexión a la base de datos
const connection = mysql.createConnection({
    host: "srv1196.hstgr.io",
    user: "u436441116_mariano",
    password: "T+n8FOHAx?5u",
    database: "u436441116_database"
});

// Ruta para obtener todas las categorías
app.get("/categorias", (req, res) => {
    connection.query('SELECT * FROM categorias', (error, results, fields) => {
        if (error) {
            console.error('Error al realizar la consulta:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }
        res.json(results);
    });
});

// Ruta para crear una nueva categoría
app.post("/crear-categoria", (req, res) => {
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;

    // Realiza la inserción en la base de datos
    db.query(
        "INSERT INTO categorias (nombre, descripcion) VALUES (`${nombre}`${nombre}, ?)",
        (error, results) => {
            if (error) {
                console.error('Error al crear la categoría:', error);
                return res.status(500).json({ error: 'Error interno del servidor' });
            }
            res.status(201).json({ message: "Categoría creada exitosamente" });
        }
    );
});


// Puerto en el que escucha el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor API corriendo en el puerto ${PORT}`);
});
