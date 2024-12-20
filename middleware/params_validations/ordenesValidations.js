import { check, validationResult } from "express-validator";

const validarOrdenCrear = [
  check("usuarios_idusuarios")
    .isInt()
    .withMessage("ID usuario requerido")
    .notEmpty()
    .withMessage("ID usuario requerido"),
  check("estados_idestados")
    .isInt()
    .withMessage("ID estado requerido")
    .notEmpty()
    .withMessage("ID estado requerido"),
  check("nombre_completo")
    .isString()
    .withMessage("nombre_completo debe ser un string")
    .notEmpty()
    .withMessage("nombre_completo es requerido")
    .isLength({ min: 6 })
    .withMessage("nombre_completo debe tener al menos 6 caracteres")
    .customSanitizer((value) => (value ? value.toLowerCase() : "")),
  check("direccion")
    .isString()
    .withMessage("direccion debe ser un string")
    .notEmpty()
    .withMessage("direccion es requerida")
    .isLength({ min: 9 })
    .withMessage("direccion debe tener al menos 9 caracteres")
    .customSanitizer((value) => (value ? value.toLowerCase() : "")),
  check("telefono")
    .isNumeric()
    .withMessage("telefono debe ser un número")
    .isLength({ min: 8, max: 8 })
    .withMessage("telefono debe tener exactamente 8 caracteres")
    .notEmpty()
    .withMessage("telefono es requerido"),
  check("correo_electronico")
    .isEmail()
    .withMessage("correo_electronico debe ser un correo válido")
    .notEmpty()
    .withMessage("correo_electronico es requerido"),
  check("fecha_entrega")
    .isDate()
    .withMessage("fecha_entrega debe ser una fecha válida")
    .notEmpty()
    .withMessage("fecha_entrega es requerida"),
  check("total_orden")
    .isFloat()
    .withMessage("total_orden debe ser un número decimal")
    .notEmpty()
    .withMessage("total_orden es requerido"),
  check("detallesOrden")
    .isArray()
    .withMessage("detallesOrden debe ser un array")
    .notEmpty()
    .withMessage("detallesOrden es requerido"),
  // Middleware para manejar errores
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validarActualizarOrden = [
  check("idOrden")
    .isInt()
    .withMessage("Tipo de dato no válido para orden")
    .notEmpty()
    .withMessage("Id orden no es requerido"),
  check("usuarios_idusuarios")
    .isInt()
    .withMessage("ID usuario requerido")
    .notEmpty()
    .withMessage("ID usuario requerido"),
  check("estados_idestados")
    .isInt()
    .withMessage("ID estado requerido")
    .notEmpty()
    .withMessage("ID estado requerido"),
  check("nombre_completo")
    .isString()
    .withMessage("nombre_completo debe ser un string")
    .notEmpty()
    .withMessage("nombre_completo es requerido")
    .isLength({ min: 6 })
    .withMessage("nombre_completo debe tener al menos 6 caracteres")
    .customSanitizer((value) => (value ? value.toLowerCase() : "")),
  check("direccion")
    .isString()
    .withMessage("direccion debe ser un string")
    .notEmpty()
    .withMessage("direccion es requerida")
    .isLength({ min: 9 })
    .withMessage("direccion debe tener al menos 9 caracteres")
    .customSanitizer((value) => (value ? value.toLowerCase() : "")),
  check("telefono")
    .isNumeric()
    .withMessage("telefono debe ser un número")
    .isLength({ min: 8, max: 8 })
    .withMessage("telefono debe tener exactamente 8 caracteres")
    .notEmpty()
    .withMessage("telefono es requerido"),
  check("correo_electronico")
    .isEmail()
    .withMessage("correo_electronico debe ser un correo válido")
    .notEmpty()
    .withMessage("correo_electronico es requerido"),
  check("fecha_entrega")
    .isDate()
    .withMessage("fecha_entrega debe ser una fecha válida")
    .notEmpty()
    .withMessage("fecha_entrega es requerida"),
  check("total_orden")
    .isFloat()
    .withMessage("total_orden debe ser un número decimal")
    .notEmpty()
    .withMessage("total_orden es requerido"),
  check("detallesOrden")
    .isArray()
    .withMessage("detallesOrden debe ser un array")
    .notEmpty()
    .withMessage("detallesOrden es requerido"),
  // Middleware para manejar errores
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export { validarOrdenCrear, validarActualizarOrden };
