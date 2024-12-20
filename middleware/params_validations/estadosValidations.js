import { check, validationResult } from "express-validator";

const validarCrearEstado = [
  check("name")
    .notEmpty()
    .withMessage("Nombre estado es obligatorio")
    .isLength({ min: 5 })
    .withMessage("Nombre Requiere 5 caracteres minimo"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validarActualizarEstado = [
  check("id")
    .notEmpty()
    .withMessage("El id es requerido para actualizar estado")
    .isInt()
    .withMessage("ID debe ser un entero")
    .toInt(), // Validación básica para ID
  check("name")
    .notEmpty()
    .withMessage("Nombre es Requerido para actualización")
    .isLength({ min: 5 })
    .withMessage("Nombre requiere 5 caracteres mínimo"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export { validarCrearEstado, validarActualizarEstado };
