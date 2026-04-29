import Message from "../database/models/message.js";

export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.findAll({ order: [["createdAt", "DESC"]] });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMessageById = async (req, res) => {
  try {
    const message = await Message.findByPk(req.params.id);
    if (!message) return res.status(404).json({ message: "Message not found" });
    res.json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json({ message: "Message sent successfully", data: message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateMessage = async (req, res) => {
  try {
    const msg = await Message.findByPk(req.params.id);
    if (!msg) return res.status(404).json({ message: "Message not found" });
    await msg.update(req.body);
    res.json(msg);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const msg = await Message.findByPk(req.params.id);
    if (!msg) return res.status(404).json({ message: "Message not found" });
    await msg.destroy();
    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

