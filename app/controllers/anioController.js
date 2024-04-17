const db = require("../config/db");

exports.crearAnio = (req, res) => {
    const { año, descripcion } = req.body;
    db.query("INSERT INTO años(año, descripcion) VALUES (?, ?)", [año, descripcion], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al crear el año");
        } else {
            res.status(201).send("Año creado exitosamente");
        }
    });
};

exports.obtenerAnios = (req, res) => {
    db.query("SELECT * FROM años ORDER BY año DESC", (err, anios) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al obtener los años");
        } else {
            res.status(200).send(anios);
        }
    });
};
