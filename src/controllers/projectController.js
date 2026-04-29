import Project from "../database/models/project.js";

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({ order: [["createdAt", "DESC"]] });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFeaturedProjects = async (req, res) => {
  try {
    const projects = await Project.findAll({ where: { featured: true } });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    await project.update(req.body);
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    await project.destroy();
    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

