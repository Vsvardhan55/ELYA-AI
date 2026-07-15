const openai = require("../config/openai");

exports.generateResponse = async (messages) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages,
    temperature: 0.7,
  });

  return response.choices[0].message.content;
};