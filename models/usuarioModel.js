import { DataTypes, Model } from "@sequelize/core";
import { sequelize } from "../config/db.js";

const Usuario = sequelize.define(
  "Usuario",
  {
    idUsuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    rol_idrol: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nombre_completo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    Clientes_idClientes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    estados_idestados: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "Usuarios",
    timestamps: false,
  }
);

export default Usuario;
