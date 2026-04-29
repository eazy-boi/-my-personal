import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "visitor"),
      defaultValue: "visitor",
    },
    profileImage: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    jobTitle: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    github: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    linkedin: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    twitter: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

export default User;

