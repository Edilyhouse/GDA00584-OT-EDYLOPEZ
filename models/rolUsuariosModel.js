import { DataTypes, Model } from "@sequelize/core";
import { sequelize } from "../config/db.js";
class Rol extends Model {}

Rol.init(
  {
    idrol: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Rol",
    tableName: "Rol",
    timestamps: false,
  }
);

export default Rol;
