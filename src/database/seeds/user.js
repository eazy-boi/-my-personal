import User from "../models/user.js";

const seedUsers = async () => {
  await User.bulkCreate([
    {
      fullName: "Kevin Developer",
      email: "eazyb326@gmail.com",
      password: "password123",
      role: "admin",
      bio: "Passionate full-stack developer with 3+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful solutions.",
      jobTitle: "junior Full Stack Developer",
      location: "Kigali, Rwanda",
      github: "https://github.com/kevindeveloper",
      linkedin: "https://linkedin.com/in/kevindeveloper",
      twitter: "https://twitter.com/kevindeveloper",
      website: "https://kevindeveloper.dev",
    },
    {
      fullName: "Jane Smith",
      email: "jane@example.com",
      password: "password123",
      role: "visitor",
    },
  ]);
};

export default seedUsers;

