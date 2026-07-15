const ollama = require("../config/ollama");

exports.generateResponse = async (messages) => {

    try {

        const response = await ollama.post("/api/chat", {
            model: "llama3.1:8b",
            messages: messages,
            stream: false
        });


        return response.data.message.content;


    } catch(error){

        console.error(
            "Ollama Error:",
            error.message
        );

        throw error;
    }
};