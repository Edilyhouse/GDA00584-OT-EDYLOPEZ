import { DataTypes } from "@sequelize/core";
import { sequelize } from "../config/db.js";

const CategoriaProductos = sequelize.define(
  "CategoriaProductos",
  {
    idCategoriaProductos: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    usuarios_idusuarios: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estados_idestados: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "CategoriaProductos",
    timestamps: false,
  }
);

export default CategoriaProductos;
