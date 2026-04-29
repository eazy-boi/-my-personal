import Message from "../models/message.js";

const seedMessages = async () => {
  await Message.bulkCreate([
    {
      name: "Alice Mutesi",
      email: "alice@example.com",
      subject: "Job Opportunity",
      content: "Hi Kevin, I came across your portfolio and was impressed by your work. We have a senior developer position at our company and would love to discuss this with you.",
      isRead: false,
    },
    {
      name: "Robert Kagame",
      email: "robert@example.com",
      subject: "Collaboration Request",
      content: "Hello! I'm working on an open-source project focused on education technology in Africa. Would you be interested in collaborating?",
      isRead: true,
    },
  ]);
};

export default seedMessages;

