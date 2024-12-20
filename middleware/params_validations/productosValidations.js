import { check, validationResult } from "express-validator";

const validarAgregarProducto = [
  check("idCategoriaProductos")
    .isInt()
    .withMessage(
      "ID de categoría de productos es requerido y debe ser un número"
    )
    .notEmpty()
    .withMessage("id categoria es  requerido"),
  check("idUsuarios")
    .isInt()
    .withMessage("ID de usuariono valido")
    .notEmpty()
    .withMessage("id usuario es requerido para actualizar"),
  check("name")
    .notEmpty()
    .withMessage("Nombre es requerido")
    .customSanitizer((value) => (value ? value.toLowerCase() : "")),
  check("marca")
    .notEmpty()
    .withMessage("Marca es requerida")
    .customSanitizer((value) => (value ? value.toLowerCase() : "")),
  check("codigo")
    .notEmpty()
    .withMessage("Código es requerido")
    .customSanitizer((value) => (value ? value.toLowerCase() : "")),
  check("stock").isFloat().withMessage("Stock debe ser un número decimal"),
  check("idEstado")
    .isInt()
    .withMessage("ID de estado es requerido y debe ser un número"),
  check("precio")
    .isFloat()
    .withMessage("Precio debe ser un número decimal")
    .notEmpty()
    .withMessage("Precio es requerido"),
  //   check("fotoProducto").custom((value, { req }) => {
  //     if (!req.files || !req.files.fotoProducto) {
  //       throw new Error("Foto del producto es requerida");
  //     }
  //     const fileExt = req.files.fotoProducto.name.split(".").pop();
  //     if (!["png", "jpg"].includes(fileExt)) {
  //       throw new Error("Foto del producto debe ser .png o .jpg");
  //     }
  //     return true;
  //  }),

  // Middleware para manejar errores
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validarActualizarProducto = [
  check("idProducto")
    .isInt()
    .withMessage("tipo de dato no valido como id producto")
    .notEmpty()
    .withMessage("id producto es requerido"),
  check("idCategoriaProductos")
    .isInt()
    .withMessage(
      "ID de categoría de productos es requerido y debe ser un número"
    )
    .notEmpty()
    .withMessage("id categoria es  requerido"),
  check("idUsuarios")
    .isInt()
    .withMessage("ID de usuariono valido")
    .notEmpty()
    .withMessage("id usuario es requerido para actualizar"),
  check("name")
    .notEmpty()
    .withMessage("Nombre es requerido")
    .customSanitizer((value) => (value ? value.toLowerCase() : "")),
  check("marca")
    .notEmpty()
    .withMessage("Marca es requerida")
    .customSanitizer((value) => (value ? value.toLowerCase() : "")),
  check("codigo")
    .notEmpty()
    .withMessage("Código es requerido")
    .customSanitizer((value) => (value ? value.toLowerCase() : "")),
  check("stock").isFloat().withMessage("Stock debe ser un número decimal"),
  check("idEstado")
    .isInt()
    .withMessage("ID de estado es requerido y debe ser un número"),
  check("precio")
    .isFloat()
    .withMessage("Precio debe ser un número decimal")
    .notEmpty()
    .withMessage("Precio es requerido"),
  //   check("fotoProducto").custom((value, { req }) => {
  //     if (!req.files || !req.files.fotoProducto) {
  //       throw new Error("Foto del producto es requerida");
  //     }
  //     const fileExt = req.files.fotoProducto.name.split(".").pop();
  //     if (!["png", "jpg"].includes(fileExt)) {
  //       throw new Error("Foto del producto debe ser .png o .jpg");
  //     }
  //     return true;
  //   }),

  // Middleware para manejar errores
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export { validarAgregarProducto, validarActualizarProducto };
