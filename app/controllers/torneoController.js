const db = require("../config/db");

exports.crearTorneo = (req, res) => {
    const { nombre, descripcion } = req.body;
    db.query("INSERT INTO torneos(nombre, descripcion) VALUES (?, ?)", [nombre, descripcion], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al crear el torneo");
        } else {
            res.status(201).send("Torneo creado exitosamente");
        }
    });
};

exports.obtenerTorneos = (req, res) => {
    db.query("SELECT * FROM torneos", (err, torneos) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al obtener los torneos");
        } else {
            res.status(200).send(torneos);
        }
    });
};
