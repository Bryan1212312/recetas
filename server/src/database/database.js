import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("recetasdb", "postgres", "bryan4_alex444", {
  host: "localhost",
  logging: false,
  dialect: "postgres",
});


