# 🚀 DevPrep

**DevPrep** is a personalized AI-powered interview preparation platform for developers. Upload your resume (PDF), and let DevPrep craft a learning experience tailored just for you. Using advanced LLMs via LangChain, DevPrep creates a custom AI bot and learning area to help you ace your next tech interview.

---

## 🧠 How It Works

1. **Upload Resume (PDF):** Users provide their resume which becomes the base for tailoring the learning path.
2. **LLM Training:** LangChain processes the resume and builds a personalized context for the AI.
3. **AI Assistant:** A smart chatbot helps with Q&A, mock interviews, tips, and more.
4. **Learning Area:** Curated resources and questions based on your resume to focus on relevant topics.

---

## 🛠 Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/)
- **Backend:** [Node.js](https://nodejs.org/)
- **LLM Framework:** [LangChain](https://www.langchain.com/)
- **PDF Parsing:** (e.g., `pdf-parse`, `pdfjs`)
- **Hosting:** Vercel / Render / Railway (optional)

---

## 📁 Project Structure

devprep/ ├── frontend/ # Next.js frontend ├── backend/ # Node.js backend ├── uploads/ # Resume PDF uploads ├── llm/ # LangChain logic and setup └── README.md


---

## 🚧 Features

- 🔍 Resume parsing and skill extraction
- 🧠 Personalized AI assistant powered by LangChain
- 📚 Adaptive learning content based on your experience
- 💬 Interview Q&A and mock sessions
- 🌐 Clean and responsive UI

---

## 🧪 Local Development

### Prerequisites

- Node.js >= 18
- NPM or Yarn
- OpenAI API key

### Steps

1. Clone the repo:

```bash
git clone https://github.com/SLANGERES/DevPrep.git
cd devprep

# In Server
npm run dev

# In frontend
npm run dev
