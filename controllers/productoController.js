import { sequelize } from "../config/db.js";
import {
  findCategoriaProducto,
  findProducto,
  findUser,
} from "../helpers/validateDatabaseInformation.js";

const insertarProducto = async (req, res) => {
  const {
    idCategoriaProductos,
    idUsuarios,
    name,
    marca,
    codigo,
    stock,
    idEstado,
    precio,
    fotoProducto,
  } = req.body;

  try {
    await findUser(idUsuarios, res);
    await findCategoriaProducto(idCategoriaProductos, res);
    const nombre = name.toLowerCase();

    // Convertir fotoProducto a VARBINARY
    const fotoProductoBinary = Buffer.from(fotoProducto, "binary");

    await sequelize.query(
      `EXEC InsertarProducto @CategoriaProductos_idCategoriaProductos = :idCategoriaProductos, 
                            @usuarios_idusuarios = :idUsuarios, 
                            @nombre = :nombre, 
                            @marca = :marca, 
                            @codigo = :codigo, 
                            @stock = :stock,
                            @estados_idestados = :idEstado, 
                            @precio = :precio, 
                            @foto = :fotoProducto`,
      {
        replacements: {
          idCategoriaProductos,
          idUsuarios,
          nombre,
          marca,
          codigo,
          stock,
          idEstado,
          precio,
          fotoProducto: fotoProductoBinary,
        },
        type: sequelize.QueryTypes.RAW,
      }
    );

    return res.status(200).json({ msg: "Producto Insertado exitosamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error al Insertar producto" });
  }
};

const actualizarProducto = async (req, res) => {
  const {
    idProducto,
    idCategoriaProductos,
    idUsuarios,
    name,
    marca,
    codigo,
    stock,
    idEstado,
    precio,
    fotoProducto,
  } = req.body;

  try {
    await findUser(idUsuarios, res);
    await findCategoriaProducto(idCategoriaProductos, res);
    await findProducto(idProducto, res);
    const nombre = name.toLowerCase();
    const fotoProductoBinary = Buffer.from(fotoProducto, "binary");

    await sequelize.query(
      `EXEC ActualizarProducto @idProducto = :idProducto, 
                              @CategoriaProductos_idCategoriaProductos = :idCategoriaProductos, 
                              @usuarios_idusuarios = :idUsuarios, 
                              @nombre = :nombre, 
                              @marca = :marca, 
                              @codigo = :codigo, 
                              @stock = :stock,
                              @estados_idestados = :idEstado, 
                              @precio = :precio, 
                              @foto = :fotoProducto`,
      {
        replacements: {
          idProducto,
          idCategoriaProductos,
          idUsuarios,
          nombre,
          marca,
          codigo,
          stock,
          idEstado,
          precio,
          fotoProducto: fotoProductoBinary,
        },
        type: sequelize.QueryTypes.RAW,
      }
    );

    return res.status(200).json({ msg: "Producto Actualizado exitosamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error al Actualizar producto" });
  }
};

export { insertarProducto, actualizarProducto };
