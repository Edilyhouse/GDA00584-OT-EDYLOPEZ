import express from "express";
import {
  agregarCategoria,
  actualizarCategoria,
} from "../controllers/productoCategoriaController.js";
import { validateJson } from "../middleware/validateJson.js";
import {
  validarActualizarCategoria,
  validarAgregarCategoria,
} from "../middleware/params_validations/productoCategoriaValidations.js";

import checkAuth from "../middleware/validarAutorizacion.js";

const router = express.Router();

router.post(
  "/",
  validateJson,
  checkAuth,
  validarAgregarCategoria,
  agregarCategoria
);
router.patch(
  "/:id",
  validateJson,
  checkAuth,
  validarActualizarCategoria,
  actualizarCategoria
);

export default router;
