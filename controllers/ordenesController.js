import { sequelize } from "../config/db.js";

//TODO agregar validaciones directo a la base de datos

const insertarOrden = async (req, res) => {
  const {
    usuarios_idusuarios,
    estados_idestados,
    nombre_completo,
    direccion,
    telefono,
    correo_electronico,
    fecha_entrega,
    total_orden,
    detallesOrden,
  } = req.body;

  try {
    // Insertar la orden
    const resultadoOrden = await sequelize.query(
      `EXEC InsertarOrden 
        @usuarios_idusuarios = :usuarios_idusuarios,
        @estados_idestados = :estados_idestados,
        @nombre_completo = :nombre_completo,
        @direccion = :direccion,
        @telefono = :telefono,
        @correo_electronico = :correo_electronico,
        @fecha_entrega = :fecha_entrega,
        @total_orden = :total_orden`,
      {
        replacements: {
          usuarios_idusuarios,
          estados_idestados,
          nombre_completo,
          direccion,
          telefono,
          correo_electronico,
          fecha_entrega,
          total_orden,
        },
        type: sequelize.QueryTypes.RAW,
      }
    );

    // Obtener el ID de la orden recién creada
    const idOrden = resultadoOrden[0][0].idOrden;

    // Insertar los detalles de la orden
    for (let detalle of detallesOrden) {
      await sequelize.query(
        `EXEC InsertarOrdenDetalle 
          @Orden_idOrden = :Orden_idOrden,
          @Productos_idProductos = :Productos_idProductos,
          @cantidad = :cantidad,
          @precio = :precio,
          @subtotal = :subtotal`,
        {
          replacements: {
            Orden_idOrden: idOrden,
            Productos_idProductos: detalle.Productos_idProductos,
            cantidad: detalle.cantidad,
            precio: detalle.precio,
            subtotal: detalle.subtotal,
          },
          type: sequelize.QueryTypes.RAW,
        }
      );
    }

    return res.status(201).json({ msg: "Orden insertada exitosamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error al insertar la orden" });
  }
};

const actualizarOrden = async (req, res) => {
  const {
    idOrden,
    usuarios_idusuarios,
    estados_idestados,
    nombre_completo,
    direccion,
    telefono,
    correo_electronico,
    fecha_entrega,
    total_orden,
    detallesOrden,
  } = req.body;

  try {
    await sequelize.query(
      `EXEC ActualizarOrdenConDetalles 
        @idOrden = :idOrden,
        @usuarios_idusuarios = :usuarios_idusuarios,
        @estados_idestados = :estados_idestados,
        @nombre_completo = :nombre_completo,
        @direccion = :direccion,
        @telefono = :telefono,
        @correo_electronico = :correo_electronico,
        @fecha_entrega = :fecha_entrega,
        @total_orden = :total_orden,
        @detallesOrden = :detallesOrden`,
      {
        replacements: {
          idOrden,
          usuarios_idusuarios,
          estados_idestados,
          nombre_completo,
          direccion,
          telefono,
          correo_electronico,
          fecha_entrega,
          total_orden,
          detallesOrden: JSON.stringify(detallesOrden), // Pasar los detalles como JSON
        },
        type: sequelize.QueryTypes.RAW,
      }
    );

    return res.status(200).json({ msg: "Orden actualizada exitosamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error al actualizar la orden" });
  }
};

export { insertarOrden, actualizarOrden };
