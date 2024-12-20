import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import Orden from "./Orden.js";

const OrdenDetalle = sequelize.define("OrdenDetalle", {
  idOrdenDetalles: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Orden_idOrden: {
    type: DataTypes.INTEGER,
    references: {
      model: Orden,
      key: "idOrden",
    },
    allowNull: false,
  },
  Productos_idProductos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  subtotal: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Orden.hasMany(OrdenDetalle, { foreignKey: "Orden_idOrden" });
OrdenDetalle.belongsTo(Orden, { foreignKey: "Orden_idOrden" });

export default OrdenDetalle;
