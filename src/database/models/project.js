import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

const Project = sequelize.define(
  "Project",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    technologies: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const raw = this.getDataValue("technologies");
        return raw ? raw.split(",") : [];
      },
      set(val) {
        this.setDataValue("technologies", Array.isArray(val) ? val.join(",") : val);
      },
    },
    imageUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    liveUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    repoUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    featured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "projects",
    timestamps: true,
  }
);

export default Project;

