import { sequelize } from "../config/db.js";
import { findCliente } from "../helpers/validateDatabaseInformation.js";

const actualizarCliente = async (req, res) => {
  const {
    idClientes,
    razon_social,
    nombre_comercial,
    direccion_entrega,
    telefono,
    email,
  } = req.body;

  try {
    const clienteExist = await findCliente(idClientes);

    if (clienteExist.error) {
      return res.status(400).json({ msg: clienteExist.message });
    }

    await sequelize.query(
      `EXEC ActualizarCliente 
        @idClientes = :idClientes,
        @razon_social = :razon_social,
        @nombre_comercial = :nombre_comercial,
        @direccion_entrega = :direccion_entrega,
        @telefono = :telefono,
        @email = :email`,
      {
        replacements: {
          idClientes,
          razon_social,
          nombre_comercial,
          direccion_entrega,
          telefono,
          email,
        },
        type: sequelize.QueryTypes.RAW,
      }
    );

    return res
      .status(200)
      .json({ msg: "Información del cliente actualizada exitosamente" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "Error al actualizar la información del cliente" });
  }
};

export { actualizarCliente };
