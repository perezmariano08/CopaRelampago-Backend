const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors")

app.use(cors({
    origin: ['https://cr-sistema.vercel.app', 'http://localhost:5173'],
    // Ajusta las opciones según sea necesario
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json())

const port = process.env.PORT || 3001

const db = mysql.createConnection({
    host: "srv1196.hstgr.io",
    user: "u436441116_mariano",
    password: "T+n8FOHAx?5u",
    database: "u436441116_database"
})

app.post("/crear-categoria", (req, res)=>{
    const nombre = req.body.nombre
    const descripcion = req.body.descripcion

    db.query(`INSERT INTO categorias(nombre, descripcion) VALUES ('${nombre}','${descripcion}')`,
        (err, result)=>{
            if(err){
                console.log(err);
            } else {
                res.send("Categoria registrada con exito")
            }
        }
    )
})

app.get("/categorias", (req, res)=>{
    db.query('SELECT * FROM categorias',
        (err, result)=>{
            if(err){
                console.log(err);
            } else {
                res.send(result)
            }
        }
    )
})

app.post("/crear-torneo", (req, res)=>{
    const nombre = req.body.nombre
    const descripcion = req.body.descripcion

    db.query(`INSERT INTO torneos(nombre, descripcion) VALUES ('${nombre}','${descripcion}')`,
        (err, result)=>{
            if(err){
                console.log(err);
            } else {
                res.send("Torneo registrado con exito")
            }
        }
    )
})

app.get("/torneos", (req, res)=>{
    db.query('SELECT * FROM torneos',
        (err, result)=>{
            if(err){
                console.log(err);
            } else {
                res.send(result)
            }
        }
    )
})

 app.post("/crear-sede", (req, res)=>{
     const nombre = req.body.nombre
     const descripcion = req.body.descripcion

     db.query(`INSERT INTO sedes(nombre, descripcion) VALUES ('${nombre}','${descripcion}')`,
         (err, result)=>{
             if(err){
                 console.log(err);
             } else {
                 res.send("Torneo registrado con exito")
             }
         }
     )
 })

 app.get("/sedes", (req, res)=>{
     db.query('SELECT * FROM sedes',
         (err, result)=>{
             if(err){
                 console.log(err);
             } else {
                 res.send(result)
             }
         }
     )
 })

 app.post("/crear-anio", (req, res)=>{
     const año = req.body.año
     const descripcion = req.body.descripcion

     db.query(`INSERT INTO años(año, descripcion) VALUES ('${año}','${descripcion}')`,
         (err, result)=>{
             if(err){
                 console.log(err);
             } else {
                 res.send("Torneo registrado con exito")
             }
         }
     )
 })

 app.get("/anios", (req, res)=>{
     db.query('SELECT * FROM años ORDER BY año DESC',
         (err, result)=>{
             if(err){
                 console.log(err);
             } else {
                 res.send(result)
             }
         }
     )
 })

 app.post("/crear-temporada", (req, res)=>{
     const año = req.body.año
     const sede = req.body.sede
     const categoria = req.body.categoria
     const torneo = req.body.torneo
     const descripcion = req.body.descripcion

     db.query(`INSERT INTO temporadas(id_torneo, id_categoria, id_año, id_sede, descripcion) VALUES ('${torneo}','${categoria}','${año}','${sede}','${descripcion}')`,
         (err, result)=>{
             if(err){
                 console.log(err);
             } else {
                 res.send("Torneo registrado con exito")
             }
         }
     )
 })

 app.get("/temporadas", (req, res)=>{
     db.query('SELECT id_temporada, torneos.nombre AS torneo, categorias.nombre AS categoria, años.año, sedes.nombre AS sede, temporadas.descripcion FROM temporadas INNER JOIN torneos ON temporadas.id_torneo = torneos.id_torneo INNER JOIN categorias ON temporadas.id_categoria = categorias.id_categoria INNER JOIN años ON temporadas.id_año = años.id_año INNER JOIN sedes ON temporadas.id_sede = sedes.id_sede',
         (err, result)=>{
             if(err){
                 console.log(err);
             } else {
                 res.send(result)
             }
         }
     )
 })


app.listen(port, () => {
    console.log(`Corriendo en http://localhost:${port}`);
})