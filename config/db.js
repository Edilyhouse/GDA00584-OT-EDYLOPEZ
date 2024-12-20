import { Sequelize } from "@sequelize/core";
import { MsSqlDialect } from "@sequelize/mssql";

const sequelize = new Sequelize({
  dialect: MsSqlDialect, // Dialecto específico para SQL Server
  server: "DESKTOP-7D7AF98", // Nombre del servidor
  port: 1433, // Puerto por defecto de SQL Server
  database: "GDA00584-OT-EDYLOPEZ", // Nombre de la base de datos
  authentication: {
    type: "default", // Tipo de autenticación
    options: {
      userName: "sa", // Usuario configurado
      password: "Cotefeyo123!", // Contraseña del usuario
    },
  },
  encrypt: true, // Habilita la conexión encriptada
  trustServerCertificate: true, // Confía en el certificado autofirmado
  // Logs para depuración
  // logging: console.log,
});

// Función para conectar a la base de datos
async function conectarDB() {
  try {
    await sequelize.authenticate(); // Verifica la conexión
    console.log("¡Conexión exitosa a la base de datos!");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

// Exportar la instancia de conexión
export { conectarDB, sequelize };
