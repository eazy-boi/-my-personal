import Testimonial from "../database/models/testimonial.js";

export const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.findAll();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTestimonialById = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByPk(req.params.id);
    if (!testimonial) return res.status(404).json({ message: "Testimonial not found" });
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByPk(req.params.id);
    if (!testimonial) return res.status(404).json({ message: "Testimonial not found" });
    await testimonial.update(req.body);
    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByPk(req.params.id);
    if (!testimonial) return res.status(404).json({ message: "Testimonial not found" });
    await testimonial.destroy();
    res.json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

