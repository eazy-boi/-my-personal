import express from "express";
import { getAllProjects, getFeaturedProjects, getProjectById, createProject, updateProject, deleteProject } from "../controllers/projectController.js";

const router = express.Router();

router.get("/", getAllProjects);
router.get("/featured", getFeaturedProjects);
router.get("/:id", getProjectById);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;

