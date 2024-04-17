const db = require("../config/db");

exports.crearSede = (req, res) => {
    const { nombre, descripcion } = req.body;
    db.query("INSERT INTO sedes(nombre, descripcion) VALUES (?, ?)", [nombre, descripcion], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al crear la sede");
        } else {
            res.status(201).send("Sede creada exitosamente");
        }
    });
};

exports.obtenerSedes = (req, res) => {
    db.query("SELECT * FROM sedes", (err, sedes) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al obtener las sedes");
        } else {
            res.status(200).send(sedes);
        }
    });
};
