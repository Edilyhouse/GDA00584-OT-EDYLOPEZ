import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Orden = sequelize.define("Orden", {
  idOrden: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  usuarios_idusuarios: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estados_idestados: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  nombre_completo: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  correo_electronico: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  fecha_entrega: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  total_orden: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

export default Orden;
