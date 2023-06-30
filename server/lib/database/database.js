import Sequelize from "sequelize";

// conexion a la base de datos

export const sequelize = new Sequelize("railway", "postgres", "S09Ze05X0LkMeKQpUdzT", {
  host: "containers-us-west-104.railway.app",
  logging: false,
  dialect: "postgres",
  port: 6001
});