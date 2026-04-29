import Skill from "../database/models/skill.js";

export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.findAll({ order: [["category", "ASC"], ["proficiency", "DESC"]] });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSkillsByCategory = async (req, res) => {
  try {
    const skills = await Skill.findAll({ where: { category: req.params.category } });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findByPk(req.params.id);
    if (!skill) return res.status(404).json({ message: "Skill not found" });
    res.json(skill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createSkill = async (req, res) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const skill = await Skill.findByPk(req.params.id);
    if (!skill) return res.status(404).json({ message: "Skill not found" });
    await skill.update(req.body);
    res.json(skill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findByPk(req.params.id);
    if (!skill) return res.status(404).json({ message: "Skill not found" });
    await skill.destroy();
    res.json({ message: "Skill deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

