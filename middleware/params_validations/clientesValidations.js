import { check, validationResult } from "express-validator";

const validarCliente = [
  check("idClientes")
    .isInt()
    .withMessage("idClientes debe ser un entero")
    .toInt(), // Aseguramos que se convierta a entero
  check("razon_social")
    .notEmpty()
    .withMessage("razon_social es requerido")
    .isLength({ min: 6 })
    .withMessage("razon_social no debe tener menos de 6 caracteres")
    .customSanitizer((value) => value.toLowerCase()), // Convertimos a minúsculas
  check("nombre_comercial")
    .optional() // Permitimos que pueda ser vacío
    .customSanitizer((value) => (value ? value.toLowerCase() : value)), // Convertimos a minúsculas si no está vacío
  check("direccion_entrega")
    .notEmpty()
    .withMessage("direccion_entrega es requerida")
    .isLength({ min: 5, max: 255 })
    .withMessage("direccion_entrega debe tener entre 5 y 255 caracteres") // Validación de longitud
    .customSanitizer((value) => value.toLowerCase()), // Convertimos a minúsculas
  check("telefono")
    .isLength({ min: 8, max: 8 })
    .withMessage("telefono debe tener 8 caracteres")
    .isNumeric()
    .withMessage("telefono debe ser un número")
    .toInt(), // Convertimos a número entero
  check("email")
    .isEmail()
    .withMessage("email debe ser un correo válido")
    .customSanitizer((value) => value.toLowerCase()), // Convertimos a minúsculas
  // Middleware para manejar errores
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export default validarCliente;
