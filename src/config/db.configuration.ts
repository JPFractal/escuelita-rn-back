import { registerAs } from "@nestjs/config";
import { Dialect } from "sequelize";

export default registerAs("database", () => ({
  dialect: process.env.DB_DIALECT as Dialect,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
}));
