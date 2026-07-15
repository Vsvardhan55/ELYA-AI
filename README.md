# 🤖 ELYA AI

> A modern AI-powered conversational assistant inspired by ChatGPT, built with **Angular**, **Node.js**, **Express.js**, **MongoDB**, and **Ollama (Llama 3.1)**.

![License](https://img.shields.io/badge/License-MIT-green.svg)
![Angular](https://img.shields.io/badge/Angular-20-red)
![Node.js](https://img.shields.io/badge/Node.js-22-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-success)
![Express](https://img.shields.io/badge/Express.js-Backend-lightgrey)
![Ollama](https://img.shields.io/badge/Ollama-LLM-blue)

---

## 📖 Overview

ELYA AI is a full-stack AI assistant that provides an intuitive chat experience similar to ChatGPT. It features secure authentication, persistent conversation history, and integration with locally hosted Large Language Models using Ollama.

The project is designed with a scalable architecture, making it suitable for future enhancements such as Retrieval-Augmented Generation (RAG), file analysis, multimodal AI, and cloud deployment.

---

## ✨ Features

### Authentication
- Secure User Registration
- User Login with JWT Authentication
- Protected API Routes
- Password Encryption using bcrypt

### AI Chat
- Interactive Chat Interface
- Persistent Chat History
- Multiple Conversations
- AI Responses using Ollama
- Automatic Conversation Management

### User Interface
- Modern ChatGPT-inspired Design
- Responsive Layout
- Sidebar Conversation Management
- Settings Module
- Loading & Typing Indicators

### Backend
- RESTful APIs
- JWT Middleware
- MongoDB Database
- Express.js Architecture
- Modular Controllers & Routes

---

# 🛠 Tech Stack

## Frontend

- Angular 20
- TypeScript
- SCSS
- RxJS
- Standalone Components

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv

---

## AI

- Ollama
- Llama 3.1 (8B)

---

## Database

- MongoDB

---

# 📂 Project Structure

```text
ELYA-AI/
│
├── elya-ai-frontend/
│   ├── src/
│   ├── angular.json
│   ├── package.json
│   └── ...
│
├── elya-ai-backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env.example
│
├── README.md
├── LICENSE
├── .gitignore
└── docker-compose.yml
```

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Vsvardhan55/ELYA-AI.git

cd ELYA-AI
```

---

## 2️⃣ Backend Setup

```bash
cd elya-ai-backend

npm install
```

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

OLLAMA_BASE_URL=http://localhost:11434

OLLAMA_MODEL=llama3.1:8b
```

Run the backend:

```bash
npm run dev
```

---

## 3️⃣ Frontend Setup

```bash
cd ../elya-ai-frontend

npm install

ng serve
```

Application runs at:

```
http://localhost:4200
```

---

# 🤖 Ollama Setup

Download Ollama:

https://ollama.com/download

Pull the Llama model:

```bash
ollama pull llama3.1:8b
```

Start Ollama:

```bash
ollama serve
```

---

# 🔐 Authentication Flow

```
User Login
      │
      ▼
JWT Generated
      │
      ▼
Stored in Local Storage
      │
      ▼
HTTP Interceptor
      │
      ▼
Protected Backend APIs
```

---

# 💬 Chat Flow

```
Angular UI
      │
      ▼
Express Backend
      │
      ▼
JWT Authentication
      │
      ▼
MongoDB
      │
      ▼
Ollama
      │
      ▼
AI Response
      │
      ▼
Angular Chat UI
```

---

# 📸 Screenshots

> <img width="1920" height="1031" alt="Screenshot 2026-07-15 210425" src="https://github.com/user-attachments/assets/5035b491-3a25-49f9-a018-2f6a9df6e975" />


### Landing Page

```
assets/screenshots/landing.png
```

### Login

```
assets/screenshots/login.png
```

### Chat Interface

```
assets/screenshots/chat.png
```

### Settings

```
assets/screenshots/settings.png
```

---

# 📌 Current Status

### Completed

- User Registration
- User Login
- JWT Authentication
- MongoDB Integration
- Chat API
- Chat History
- Angular Frontend
- Responsive UI
- Ollama Integration (In Progress)

---

### Planned Features

- Streaming AI Responses
- Markdown Rendering
- Code Syntax Highlighting
- Image Upload
- PDF Analysis
- Voice Chat
- Multiple AI Models
- Chat Search
- Export Conversations
- Dark & Light Theme
- RAG Knowledge Base
- Cloud Deployment

---

# 🧪 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |

---

## Chat

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/chats` | Get Chats |
| POST | `/api/chats` | Create Chat |
| POST | `/api/chats/:chatId/message` | Send Message |

---

# 📈 Future Roadmap

- AI Memory
- RAG with Vector Database
- Image Generation
- Speech-to-Text
- Text-to-Speech
- AI Agents
- Plugins
- Workspace Management
- Team Collaboration
- Docker Deployment
- Kubernetes Deployment

---

# 👨‍💻 Author

**Sethu Vardhan Valluri**

**GitHub**

https://github.com/Vsvardhan55

**LinkedIn**

https://www.linkedin.com/in/sethu-vardhan-valluri/

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

---

# 📄 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for details.

---

⭐ If you found this project useful, consider giving it a **Star** on GitHub!
