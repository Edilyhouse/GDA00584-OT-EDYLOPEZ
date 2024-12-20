import express from "express";
import {
  crearUsuario,
  actualizarUsuario,
  autenticarUsuario,
} from "../controllers/usuarioController.js";
import { validateJson } from "../middleware/validateJson.js";
import {
  validarCrearUsuario,
  validarActualizarUsuario,
  validarAutenticacionUsuario,
} from "../middleware/params_validations/usuarioValidations.js";

const router = express.Router();

// router.get("/", getUsuarios);

router.post("/", validateJson, validarCrearUsuario, crearUsuario);
router.post(
  "/login",
  validateJson,
  validarAutenticacionUsuario,
  autenticarUsuario
);
router.patch("/:id", validateJson, validarActualizarUsuario, actualizarUsuario);

export default router;
