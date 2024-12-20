import Usuario from "../models/usuarioModel.js";
import Estado from "../models/estadosModel.js";
import { sequelize } from "../config/db.js";

const agregarCategoria = async (req, res) => {
  const { idUsuarios, idEstados, name } = req.body;

  try {
    const usuarioExist = await Usuario.findByPk(idUsuarios);
    if (!usuarioExist) {
      return res.status(404).json({ msg: "El usuario no existe" });
    }

    const estadoExist = await Estado.findByPk(idEstados);
    if (!estadoExist) {
      return res
        .status(404)
        .json({ msg: "El Estado no es valido para categoria producto" });
    }

    const nombre = name.toLowerCase();
    await sequelize.query(
      `EXEC InsertarCategoriaProducto @usuarios_idusuarios = :idUsuarios, @estados_idestados = :idEstados, @nombre = :nombre`,
      {
        replacements: {
          idUsuarios,
          idEstados,
          nombre: nombre,
        },
        type: sequelize.QueryTypes.RAW,
      }
    );

    return res.status(201).json({ msg: "Categoria agregada exitosamente" });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Error al guardar la categoria", error: error.message });
  }
};

const actualizarCategoria = async (req, res) => {
  const { usuarioid, categoriaId, estadoCategoria, name } = req.body;

  try {
    const nombre = name.toLowerCase();
    await sequelize.query(
      `EXEC ActualizarCategoriaProducto @idCategoriaProductos = :categoriaId, @usuarios_idusuarios = :usuarioid, @estados_idestados = :estadoCategoria, @nombre = :nombre`,
      {
        replacements: {
          categoriaId,
          usuarioid,
          estadoCategoria,
          nombre,
        },
        type: sequelize.QueryTypes.RAW,
      }
    );

    res.status(200).json({ msg: "Categoría actualizada exitosamente" });
  } catch (error) {
    console.log("Error al intentar actualizar categoría producto: ", error);
    res.status(500).json({
      msg: "Error al actualizar categoría producto",
      error: error.message,
    });
  }
};

export { agregarCategoria, actualizarCategoria };
