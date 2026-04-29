import Experience from "../database/models/experience.js";

export const getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.findAll({ order: [["startDate", "DESC"]] });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findByPk(req.params.id);
    if (!experience) return res.status(404).json({ message: "Experience not found" });
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createExperience = async (req, res) => {
  try {
    const experience = await Experience.create(req.body);
    res.status(201).json(experience);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findByPk(req.params.id);
    if (!experience) return res.status(404).json({ message: "Experience not found" });
    await experience.update(req.body);
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findByPk(req.params.id);
    if (!experience) return res.status(404).json({ message: "Experience not found" });
    await experience.destroy();
    res.json({ message: "Experience deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

