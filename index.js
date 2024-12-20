import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { conectarDB } from "./config/db.js";
import { validateJson } from "./middleware/validateJson.js";
import usuarioRoute from "./routes/usuariosRoute.js";
import clientesRoute from "./routes/clientesRoute.js";
import RolRoute from "./routes/rolRoute.js";
import categoriaProductosRoutes from "./routes/categoriaProductosRoute.js";
import productosRoute from "./routes/productosRoute.js";
import estadosRoute from "./routes/estadosRoute.js";
import ordenesRoute from "./routes/ordenesRoute.js";

const app = express();

//  Configuraciones varias
// Configurar CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL || "*", // TODO Permite cualquier origen si no se especifica cambiarlo al conectar frontend
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
// configurar JSON
app.use(express.json());
// traer variables de entorno
dotenv.config();
// conectar base de datos
await conectarDB();

// Inicializar el servidor
const PORT = process.env.PORT || 4000;
const Server = app.listen(PORT, () => {
  console.log(`Running at server ${PORT}`);
});

app.use(validateJson);

// crear rutas
app.use("/api/usuarios", usuarioRoute);
app.use("/api/roles", RolRoute);
app.use("/api/clientes", clientesRoute);
app.use("/api/categoriaproductos", categoriaProductosRoutes);
app.use("/api/productos", productosRoute);
app.use("/api/estados", estadosRoute);
app.use("/api/ordenes", ordenesRoute);
