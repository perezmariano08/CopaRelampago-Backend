const db = require("../config/db");

exports.crearCategoria = (req, res) => {
    const { nombre, descripcion } = req.body;
    db.query("INSERT INTO categorias(nombre, descripcion) VALUES (?, ?)", [nombre, descripcion], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al crear la categoría");
        } else {
            res.status(201).send("Categoría creada exitosamente");
        }
    });
};

exports.obtenerCategorias = (req, res) => {
    db.query("SELECT * FROM categorias", (err, categorias) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al obtener las categorías");
        } else {
            res.status(200).send(categorias);
        }
    });
};
