import express from "express";
import {
  actualizarProducto,
  insertarProducto,
} from "../controllers/productoController.js";
import {
  validarAgregarProducto,
  validarActualizarProducto,
} from "../middleware/params_validations/productosValidations.js";
import { validateJson } from "../middleware/validateJson.js";
import checkAuth from "../middleware/validarAutorizacion.js";

const router = express.Router();

router.post(
  "/",
  validateJson,
  checkAuth,
  validarAgregarProducto,
  insertarProducto
);
router.patch(
  "/:id",
  validateJson,
  checkAuth,
  validarActualizarProducto,
  actualizarProducto
);

export default router;
