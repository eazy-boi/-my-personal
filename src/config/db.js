import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbPort = Number(process.env.DB_PORT || 5000);

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST || "localhost",
  port: Number.isNaN(dbPort) ? 5000 : dbPort,
  dialect: "mysql",
  logging: false,
  dialectOptions: {
    connectTimeout: 10000,
  },
});

export const assertDbEnv = () => {
  const required = ["DB_HOST", "DB_PORT", "DB_USER", "DB_PASSWORD", "DB_NAME"];
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing DB environment variable(s): ${missing.join(", ")}`);
  }
};

export default sequelize;
