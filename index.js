const express = require("express");
const app = express();
const cors = require("cors");

// Importa las rutas de cada entidad
const categoriaRoutes = require("./app/routes/categoriesRoutes");
const torneoRoutes = require("./app/routes/torneosRoutes");
const sedeRoutes = require("./app/routes/sedeRoutes");
const anioRoutes = require("./app/routes/aniosRoutes");
const temporadaRoutes = require("./app/routes/temporadaRoutes");

app.use(cors({
    origin: ['https://cr-sistema.vercel.app', 'http://localhost:5173'],
    // Ajusta las opciones según sea necesario
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Usa las rutas correspondientes
app.use("/categoria", categoriaRoutes);
app.use("/torneo", torneoRoutes);
app.use("/sede", sedeRoutes);
app.use("/anio", anioRoutes);
app.use("/temporada", temporadaRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Corriendo en http://localhost:${port}`);
});
