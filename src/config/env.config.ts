import dotenv from 'dotenv';
import path from 'path';

const ENV_PATH = path.join(__dirname, '/../../.env')
console.log('dirname enc.config', ENV_PATH);
dotenv.config({ path: ENV_PATH })

export const SERVER_PORT = process.env.NODE_PORT || 3000; 
export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD =  process.env.DB_PASSWORD;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const MYSQL_ROOT_PASSWORD = process.env.MYSQL_ROOT_PASSWORD;
export const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
export const MYSQL_USER = process.env.MYSQL_USER;
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
