import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, MYSQL_DATABASE, MYSQL_PASSWORD, MYSQL_USER } from "./env.config";

export const sequelize = new Sequelize(
  MYSQL_DATABASE!, 
  MYSQL_USER!, 
  DB_PASSWORD!,
  {
    host: DB_HOST,
    port: Number(DB_PORT),
    dialect: 'mysql',
    define: {
      timestamps: true,
    },
  }
);
