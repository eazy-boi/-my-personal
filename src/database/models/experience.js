import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

const Experience = sequelize.define(
  "Experience",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    company: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    isCurrent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    companyLogo: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "experiences",
    timestamps: true,
  }
);

export default Experience;

