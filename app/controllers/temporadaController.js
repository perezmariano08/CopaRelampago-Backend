const db = require("../config/db");

exports.crearTemporada = (req, res) => {
    const { año, sede, categoria, torneo, descripcion } = req.body;
    db.query("INSERT INTO temporadas(id_torneo, id_categoria, id_año, id_sede, descripcion) VALUES (?, ?, ?, ?, ?)", [torneo, categoria, año, sede, descripcion], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al crear la temporada");
        } else {
            res.status(201).send("Temporada creada exitosamente");
        }
    });
};

exports.obtenerTemporadas = (req, res) => {
    db.query("SELECT id_temporada, torneos.nombre AS torneo, categorias.nombre AS categoria, años.año, sedes.nombre AS sede, temporadas.descripcion FROM temporadas INNER JOIN torneos ON temporadas.id_torneo = torneos.id_torneo INNER JOIN categorias ON temporadas.id_categoria = categorias.id_categoria INNER JOIN años ON temporadas.id_año = años.id_año INNER JOIN sedes ON temporadas.id_sede = sedes.id_sede", (err, temporadas) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error al obtener las temporadas");
        } else {
            res.status(200).send(temporadas);
        }
    });
};
