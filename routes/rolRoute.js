import express from "express";
import { validateJson } from "../middleware/validateJson.js";
import {
  validarCrearRoles,
  validarActualizarRol,
} from "../middleware/params_validations/rolesValidations.js";
import { crearRol, actualizarRol } from "../controllers/rolController.js";
import checkAuth from "../middleware/validarAutorizacion.js";

const router = express.Router();

router.post("/", validateJson, checkAuth, validarCrearRoles, crearRol);
router.patch(
  "/:id",
  validateJson,
  checkAuth,
  validarActualizarRol,
  actualizarRol
);

export default router;
