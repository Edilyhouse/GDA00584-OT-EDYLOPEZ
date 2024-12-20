// models/cliente.js
import { DataTypes, Model } from "@sequelize/core";
import { sequelize } from "../config/db.js";

class Cliente extends Model {}

Cliente.init(
  {
    idClientes: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    razon_social: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre_comercial: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion_entrega: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Cliente",
    tableName: "Clientes",
    timestamps: false,
  }
);

export default Cliente;
