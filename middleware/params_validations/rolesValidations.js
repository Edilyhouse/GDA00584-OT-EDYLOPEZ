import { check, validationResult } from "express-validator";

const validarCrearRoles = [
  check("name")
    .notEmpty()
    .withMessage("Nombre de rol es requerido")
    .isLength({ min: 5 })
    .withMessage("Es requerido 5 caracteres mínimo"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validarActualizarRol = [
  check("name")
    .notEmpty()
    .withMessage("Nombre requerido")
    .isLength({ min: 5 })
    .withMessage("Es requerido mínimo 5 caracteres"),
  check("id").notEmpty().withMessage("Id es requerido para actualizar rol"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export { validarCrearRoles, validarActualizarRol };
