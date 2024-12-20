import express from "express";
import {
  insertarOrden,
  actualizarOrden,
} from "../controllers/ordenesController.js";

import { validateJson } from "../middleware/validateJson.js";
import checkAuth from "../middleware/validarAutorizacion.js";

import {
  validarOrdenCrear,
  validarActualizarOrden,
} from "../middleware/params_validations/ordenesValidations.js";

const router = express.Router();

// Ruta para insertar una nueva orden
router.post("/", validateJson, checkAuth, validarOrdenCrear, insertarOrden);

// Ruta para actualizar una orden existente
router.put(
  "/:id",
  validateJson,
  checkAuth,
  validarActualizarOrden,
  actualizarOrden
);

export default router;
