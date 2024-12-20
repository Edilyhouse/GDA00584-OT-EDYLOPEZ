import express from "express";
import {
  crearEstado,
  actualizarEstado,
} from "../controllers/estadosController.js";
import {
  validarCrearEstado,
  validarActualizarEstado,
} from "../middleware/params_validations/estadosValidations.js";
import checkAuth from "../middleware/validarAutorizacion.js";
import { validateJson } from "../middleware/validateJson.js";

const router = express.Router();

router.post("/", validateJson, checkAuth, validarCrearEstado, crearEstado);
router.patch(
  "/:id",
  validateJson,
  checkAuth,
  validarActualizarEstado,
  actualizarEstado
);

export default router;
