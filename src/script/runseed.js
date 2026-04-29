import sequelize from "../config/db.js";
import seedUsers from "../database/seeds/user.js";
import seedExperiences from "../database/seeds/experience.js";
import seedProjects from "../database/seeds/project.js";
import seedSkills from "../database/seeds/skill.js";
import seedTestimonials from "../database/seeds/testimonial.js";
import seedMessages from "../database/seeds/message.js";

const runSeeds = async () => {
  try {
    console.log("Starting migration + seeding...");

    // connect & sync database
    await sequelize.sync({ force: true });
    console.log("Database synced successfully");

    // run seeds
    await seedUsers();
    console.log("Users seeded successfully");

    await seedExperiences();
    console.log("Experiences seeded successfully");

    await seedProjects();
    console.log("Projects seeded successfully");

    await seedSkills();
    console.log("Skills seeded successfully");

    await seedTestimonials();
    console.log("Testimonials seeded successfully");

    await seedMessages();
    console.log("Messages seeded successfully");

    console.log("All seeds completed ✅");
    process.exit();
  } catch (error) {
    console.error("Error running seeds:", error);
    process.exit(1);
  }
};

runSeeds();

