import CategoriaProductos from "../models/productCategoryModel.js";
import Usuario from "../models/usuarioModel.js";
import Producto from "../models/producModel.js";
import Rol from "../models/rolUsuariosModel.js";
import Estado from "../models/estadosModel.js";
import Clientes from "../models/clientesModel.js";

const findUser = async (userId) => {
  const userExists = await Usuario.findByPk(userId);
  if (!userExists) {
    return { error: true, message: "Usuario no válido" };
  }
  return { error: false, data: userExists };
};

const findCliente = async (idClientes) => {
  const result = await Clientes.findByPk(idClientes);

  if (!result) {
    return {
      error: true,
      message: "cliente no es válido para ser actualizado",
    };
  } else {
    return { error: false, data: result.message };
  }
};

const findCategoriaProducto = async (idCategoriaProductos) => {
  const categoriaProducto = await CategoriaProductos.findByPk(
    idCategoriaProductos
  );
  if (!categoriaProducto) {
    return { error: true, message: "Categoría no válida para este producto" };
  }
  return { error: false, data: categoriaProducto };
};

const findProducto = async (idProducto) => {
  const result = await Producto.findByPk(idProducto);
  if (!result) {
    return {
      error: true,
      message: "El producto que desea actualizar no existe",
    };
  }
  return { error: false, data: result };
};

const findRol = async (nombre = null, id = null) => {
  let result;

  if (nombre) {
    result = await Rol.findOne({ where: { nombre } });
    if (result) {
      return {
        error: true,
        message: "Nombre de rol duplicado",
      };
    }
  }

  if (id) {
    result = await Rol.findByPk(id);
    if (!result) {
      return {
        error: true,
        message: "El rol requerido no es valido",
      };
    }
  }

  return { error: false, data: result };
};

const findEstado = async (nombre = null, id = null) => {
  let result;

  if (nombre) {
    result = await Estado.findOne({ where: { nombre } });
    if (result) {
      return {
        error: true,
        message: "El estado deseado ya existe y no se puede duplicar",
      };
    }
  }

  if (id) {
    result = await Estado.findByPk(id);
    if (!result) {
      return {
        error: true,
        message: "El estado no existe para ser actualizado",
      };
    }
  }

  return { error: false, data: result };
};

export {
  findUser,
  findCategoriaProducto,
  findProducto,
  findRol,
  findEstado,
  findCliente,
};
