const axios = require("axios");

const ollama = axios.create({
    baseURL: "http://localhost:11434",
});

module.exports = ollama;