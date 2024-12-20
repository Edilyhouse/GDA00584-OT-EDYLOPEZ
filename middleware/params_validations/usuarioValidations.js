import { check, validationResult } from "express-validator";

const validarCrearUsuario = [
  check("rol_idrol").notEmpty().withMessage("rol_idrol es requerido"),
  check("correo")
    .notEmpty()
    .withMessage("correo es requerido")
    .isEmail()
    .withMessage("correo debe ser un correo válido"),
  check("nombre_completo")
    .notEmpty()
    .withMessage("nombre_completo es requerido")
    .isLength({ min: 6 })
    .withMessage("nombre_completo debe tener al menos 6 caracteres"),
  check("password")
    .notEmpty()
    .withMessage("password es requerido")
    .isLength({ min: 6 })
    .withMessage("password debe tener al menos 6 caracteres"),
  check("telefono")
    .notEmpty()
    .withMessage("telefono es requerido")
    .isInt()
    .withMessage("telefono debe ser un número")
    .isLength({ min: 8, max: 8 })
    .withMessage("telefono debe tener exactamente 8 caracteres"),
  check("fecha_nacimiento")
    .notEmpty()
    .withMessage("fecha_nacimiento es requerida")
    .isDate()
    .withMessage("fecha_nacimiento debe ser una fecha válida"),
  check("estados_idestados")
    .notEmpty()
    .withMessage("estados_idestados es requerido"),
  check("razon_social")
    .optional()
    .isLength({ min: 5 })
    .withMessage("razon_social debe tener al menos 5 caracteres"),
  check("nombre_comercial")
    .optional()
    .isLength({ min: 5 })
    .withMessage("nombre_comercial debe tener al menos 5 caracteres"),
  check("direccion_entrega")
    .notEmpty()
    .withMessage("direccion_entrega es requerida"),
  check("email_cliente")
    .notEmpty()
    .withMessage("email_cliente es requerido")
    .isEmail()
    .withMessage("email_cliente debe ser un correo válido"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validarActualizarUsuario = [
  check("id").notEmpty().withMessage("rol_idrol es requerido"),
  check("correo")
    .notEmpty()
    .withMessage("correo es requerido")
    .isEmail()
    .withMessage("correo debe ser un correo válido"),
  check("nombre_completo")
    .notEmpty()
    .withMessage("nombre_completo es requerido")
    .isLength({ min: 6 })
    .withMessage("nombre_completo debe tener al menos 6 caracteres"),
  check("password")
    .notEmpty()
    .withMessage("password es requerido")
    .isLength({ min: 6 })
    .withMessage("password debe tener al menos 6 caracteres"),
  check("telefono")
    .notEmpty()
    .withMessage("telefono es requerido")
    .isInt()
    .withMessage("telefono debe ser un número")
    .isLength({ min: 8, max: 8 })
    .withMessage("telefono debe tener exactamente 8 caracteres"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validarAutenticacionUsuario = [
  check("correo")
    .notEmpty()
    .withMessage("Correo electrónico es requerido")
    .isEmail()
    .withMessage("Debe ser un correo electrónico válido"),
  check("password")
    .notEmpty()
    .withMessage("Contraseña es requerida")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres")
    .matches(/^[A-Za-z0-9-_!]*$/)
    .withMessage(
      "La contraseña solo puede contener letras, números y los caracteres - _ !"
    ),

  // Middleware para manejar errores
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export {
  validarCrearUsuario,
  validarActualizarUsuario,
  validarAutenticacionUsuario,
};
