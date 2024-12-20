import { DataTypes, Model } from "@sequelize/core";
import { sequelize } from "../config/db.js";

const Producto = sequelize.define(
  "Producto",
  {
    idProducto: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    CategoriaProductos_idCategoriaProductos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    usuarios_idusuarios: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    estados_idestados: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    foto: {
      type: DataTypes.BLOB,
    },
  },
  {
    tableName: "Productos",
    timestamps: false,
  }
);

export default Producto;
