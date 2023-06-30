import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("recetas", "postgres", "12345", {
  host: "localhost",
  dialect: "postgres",
});
// Actualización de base de datos

