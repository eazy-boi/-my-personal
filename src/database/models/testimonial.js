import { DataTypes } from "sequelize";
import sequelize from "../../config/db.js";

const Testimonial = sequelize.define(
  "Testimonial",
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
    role: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    company: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1,
        max: 5,
      },
    },
  },
  {
    tableName: "testimonials",
    timestamps: true,
  }
);

export default Testimonial;

