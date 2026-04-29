import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

const Skill = sequelize.define(
  "Skill",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM("frontend", "backend", "database", "devops", "tools", "soft"),
      defaultValue: "tools",
    },
    proficiency: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1,
        max: 100,
      },
    },
    icon: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    tableName: "skills",
    timestamps: true,
  }
);

export default Skill;

