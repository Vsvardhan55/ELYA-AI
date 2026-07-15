const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const chatController = require("../controllers/chatController");

router.post("/", auth, chatController.createChat);

// NEW
router.post("/:chatId/message", auth, chatController.sendMessage);
router.get("/", auth, chatController.getChats);
module.exports = router;