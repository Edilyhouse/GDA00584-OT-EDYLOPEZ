import { actualizarCliente } from "../controllers/clienteController.js";
import validarCliente from "../middleware/params_validations/clientesValidations.js";
import express from "express";
import { validateJson } from "../middleware/validateJson.js";
import checkAuth from "../middleware/validarAutorizacion.js";

const router = express.Router();

router.patch(
  "/:id",
  validateJson,
  checkAuth,
  validarCliente,
  actualizarCliente
);

export default router;
