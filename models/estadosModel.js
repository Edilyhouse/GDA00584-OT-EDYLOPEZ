// models/estado.js
import { DataTypes, Model } from "@sequelize/core";
import { sequelize } from "../config/db.js";

class Estado extends Model {}

Estado.init(
  {
    idestados: {
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
    modelName: "Estado",
    tableName: "Estados",
    timestamps: false,
  }
);

export default Estado;
