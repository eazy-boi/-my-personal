import Testimonial from "../models/testimonial.js";

const seedTestimonials = async () => {
  await Testimonial.bulkCreate([
    {
      name: "umwiza sarah",
      role: "database product",
      company: "TechCorp Rwanda",
      message:
        "Working with Kevin was an absolute pleasure. His technical expertise and attention to detail transformed our product vision into reality. He consistently delivered high-quality code and was always willing to go the extra mile.",
      imageUrl: "https://via.placeholder.com/100",
      rating: 5,
    },
    {
      name: "nziza didier",
      role: "training",
      company: "focus image",
      message:
        "Kevin is one of the most talented developers I've worked with. His ability to architect scalable solutions while maintaining clean code is remarkable. He played a crucial role in our company's growth.",
      imageUrl: "https://via.placeholder.com/100",
      rating: 5,
    },
    {
      name: "Amina ezechiel",
      role: "Senior Designer",
      company: "Digital Solutions Ltd",
      message:
        "Exceptional collaboration skills! Kevin bridges the gap between design and development perfectly. He understands UX principles and implements designs with pixel-perfect precision.",
      imageUrl: "https://via.placeholder.com/100",
      rating: 4,
    },
    {
      name: "David ngendahayo",
      role: "Founder",
      company: "AgriTech Solutions",
      message:
        "Kevin built our entire platform from scratch and exceeded all expectations. His problem-solving abilities and proactive communication made the development process smooth and enjoyable.",
      imageUrl: "https://via.placeholder.com/100",
      rating: 5,
    },
  ]);
};

export default seedTestimonials;

