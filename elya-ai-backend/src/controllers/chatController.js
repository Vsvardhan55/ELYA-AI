const Chat = require("../models/Chat");

// Create a new chat
exports.createChat = async (req, res) => {
  try {
    const chat = await Chat.create({
      user: req.user.id,
      title: "New Chat",
      messages: [],
    });

    res.status(201).json({
      success: true,
      chat,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Send a message
exports.sendMessage = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("PARAMS:", req.params);
    console.log("USER:", req.user);

    const { chatId } = req.params;
    const { message } = req.body;

    const chat = await Chat.findOne({
      _id: chatId,
      user: req.user.id
    });

    console.log("CHAT FOUND:", chat);

    if (!chat) {
      return res.status(404).json({
        success: false,
        message: "Chat not found."
      });
    }

    chat.messages.push({
      role: "user",
      content: message
    });

    const aiReply = "Hello! I'm Elya AI.";

    chat.messages.push({
      role: "assistant",
      content: aiReply
    });

    await chat.save();

    console.log("AFTER SAVE:", chat.messages);

    res.json({
      success: true,
      reply: aiReply,
      chat
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

exports.getChats = async (req, res) => {
  try {

    const chats = await Chat.find({
      user: req.user.id
    }).sort({
      updatedAt: -1
    });

    res.status(200).json({
      success: true,
      chats
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });

  }
};