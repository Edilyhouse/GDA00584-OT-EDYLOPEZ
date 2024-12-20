import { check, validationResult } from "express-validator";

const validarAgregarCategoria = [
  check("idUsuarios")
    .isInt()
    .withMessage("Tipo de dato no válida para id usuario")
    .notEmpty()
    .withMessage("ID usuario es requerido"),
  check("idEstados")
    .isInt()
    .withMessage("ID estado requerido y debe ser un número")
    .notEmpty()
    .withMessage("ID estado es requerido"),
  check("name")
    .notEmpty()
    .withMessage("Nombre es requerido")
    .customSanitizer((value) => (value ? value.toLowerCase() : "")),

  // Middleware para manejar errores
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validarActualizarCategoria = [
  // const { usuarioid, categoriaId, estadoCategoria, name } = req.body;
  check("usuarioid")
    .isInt()
    .withMessage("Tipo de dato no válida para el id usuario")
    .notEmpty()
    .withMessage("ID usuario es requerido para actualizar categoria"),
  check("categoriaId")
    .isInt()
    .withMessage("tipo de dato no válida para el id de usuario")
    .notEmpty()
    .withMessage("ID usuario es requerido para actualizar categoria"),
  check("estadoCategoria")
    .isInt()
    .withMessage("Tipo de dato no válida como id categoría"),
  check("name")
    .notEmpty()
    .withMessage("nombre categoria es requerido")
    .customSanitizer((value) => (value ? value.toLowerCase() : "")),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export { validarAgregarCategoria, validarActualizarCategoria };
