import { Sequelize } from "@sequelize/core";
import { MsSqlDialect } from "@sequelize/mssql";

const sequelize = new Sequelize({
  dialect: MsSqlDialect, // Dialecto específico para SQL Server
  server: "DESKTOP-7D7AF98",
  port: 1433,
  database: "GDA00584-OT-EDYLOPEZ",
  authentication: {
    type: "default",
    options: {
      userName: "360userwebchallange", // Usuario configurado manual no se va a usar .env por eso se puso manual
      password: "360userwebchallange!", // Contraseña configurada manual no se va a usar .env por eso se puso manual
    },
  },
  encrypt: true, // Habilita la conexión encriptada
  trustServerCertificate: true,
  // logging: console.log, // Logs para depuración
});

// Función para conectar a la base de datos
async function conectarDB() {
  try {
    await sequelize.authenticate();
    console.log("¡Conexión exitosa a la base de datos!");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

// Exportar la instancia de conexión
export { conectarDB, sequelize };
