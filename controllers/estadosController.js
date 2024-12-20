import { sequelize } from "../config/db.js";
import { findEstado } from "../helpers/validateDatabaseInformation.js";

// @desc
// Controlador para crear un nuevo Estado

const crearEstado = async (req, res) => {
  const { name } = req.body;
  const nombre = name.toLowerCase();

  try {
    const nuevoEstado = await findEstado(nombre, null, res);
    if (nuevoEstado.error) {
      return res.status(400).json({ msg: nuevoEstado.message });
    }

    await sequelize.query(`EXEC InsertarEstado @nombre = :nombre`, {
      replacements: {
        nombre,
      },
      type: sequelize.QueryTypes.RAW,
    });
    return res.status(201).json({ msg: "Estado agregado Correctamente" });
  } catch (error) {
    //console.log(error);
    return res
      .status(500)
      .json({ msg: "Hubo un error al intentar crear el estado" });
  }
};

// @desc
// Controlador para Actualizar un estado

const actualizarEstado = async (req, res) => {
  const { id, name } = req.body;
  const nombre = name.toLowerCase();

  try {
    const estadoExists = await findEstado(null, id);
    if (estadoExists.error) {
      return res.status(400).json({ msg: estadoExists.message });
    }

    await sequelize.query(
      `EXEC ActualizarEstado @idestados = :id, @nombre = :nombre`,
      {
        replacements: {
          id,
          nombre,
        },
        type: sequelize.QueryTypes.RAW,
      }
    );
    return res.status(200).json({ msg: "Estado actualizado Correctamente" });
  } catch (error) {
    //console.log("Error al actualizar el estado:", error);
    return res.status(500).json({ msg: "Error al actualizar el estado" });
  }
};

export { crearEstado, actualizarEstado };
