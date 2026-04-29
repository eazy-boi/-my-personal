import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import sequelize from "./config/db.js";

// Import routes
import userRoutes from "./routes/user.js";
import experienceRoutes from "./routes/experience.js";
import projectRoutes from "./routes/project.js";
import skillRoutes from "./routes/skill.js";
import testimonialRoutes from "./routes/testimonial.js";
import messageRoutes from "./routes/message.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files
app.use(express.static(path.join(__dirname, "../public")));

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/messages", messageRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Serve frontend for root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// Database connection and server start
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`API available at http://localhost:${PORT}/api`);
    });
  })
  .catch((err) => {
    console.error("Server failed to start", err);
    process.exit(1);
  });

