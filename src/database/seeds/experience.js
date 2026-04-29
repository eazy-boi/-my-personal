import Experience from "../models/experience.js";

const seedExperiences = async () => {
  await Experience.bulkCreate([
    {
      company: "TechCorp Rwanda",
      role: "junior Full Stack Developer",
      description:
        "Leading a team of 5 developers to build enterprise web applications. Implemented CI/CD pipelines and reduced deployment time by 40%. Architected microservices handling 1M+ daily requests.",
      startDate: "2022-03-01",
      endDate: null,
      isCurrent: true,
      location: "Kigali, Rwanda",
      companyLogo: "https://via.placeholder.com/150",
    },
    {
      company: "StartupHub Africa",
      role: "Full Stack Developer",
      description:
        "Developed and maintained multiple client projects using React, Node.js, and PostgreSQL. Built a real-time chat application serving 50,000+ users. Mentored 3 junior developers.",
      startDate: "2020-06-01",
      endDate: "2022-02-28",
      isCurrent: false,
      location: "ruhango, gitisi",
      companyLogo: "https://via.placeholder.com/150",
    },
    {
      company: "Digital Solutions Ltd",
      role: "Junior Web Developer",
      description:
        "Started my professional journey building responsive websites and e-commerce platforms. Collaborated with designers to implement pixel-perfect UI components.",
      startDate: "2019-01-01",
      endDate: "2020-05-31",
      isCurrent: false,
      location: "muhanga, shyogwe",
      companyLogo: "https://via.placeholder.com/150",
    },
  ]);
};

export default seedExperiences;

