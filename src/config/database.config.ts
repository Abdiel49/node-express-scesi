import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, MYSQL_DATABASE, MYSQL_PASSWORD, MYSQL_USER } from "./env.config";

// console.log('DB_HOST:', DB_HOST);
// console.log('DB_NAME:', DB_NAME);
// console.log('DB_PASSWORD:', DB_PASSWORD);
// console.log('DB_PORT:', DB_PORT);
// console.log('DB_USER:', DB_USER);

export const sequelize = new Sequelize(
  MYSQL_DATABASE!, 
  MYSQL_USER!, 
  DB_PASSWORD!,
  {
    host: DB_HOST,
    port: Number(DB_PORT),
    // models: [__dirname + '/../mudules'],
    dialect: 'mariadb',
    define: {
      timestamps: true,
    },
  }
);
