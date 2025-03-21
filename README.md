# AI Code Review  

AI Code Review is a web application that analyzes and reviews code using **Ollama LLM** with the **CodeLlama:7B** model. The app features a **React.js** frontend with **CodeMirror** for code editing and an **Express.js** backend that interacts with Ollama for AI-powered reviews.  

## 🚀 Features  
- **Code Review using AI**: Get insights and suggestions for your code.  
- **Live Code Editor**: Powered by **CodeMirror** with JavaScript syntax highlighting.  
- **Markdown Preview**: Displays AI-generated reviews in markdown format.  
- **Fast & Scalable Backend**: Built with **Express.js** and handles API requests.  
- **CORS Support**: Allows cross-origin requests for frontend-backend communication.  

---

## 🛠️ Tech Stack  
- **Frontend**: React.js, Vite, Tailwind CSS, CodeMirror.  
- **Backend**: Express.js, Ollama LLM.  
- **AI Model**: CodeLlama:7B (via Ollama).  
- **Additional Tools**: LangChain, Markdown Preview.  

---

## 📦 Installation  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/harsh-bhoir-01/aiCodeReviewer.git
cd aiCodeReviewer
```


### 2️⃣ Install Dependencies.
```sh
*npm install
```

### 3️⃣ Install and Setup Ollama.
*Install Ollama on Your Local Machine
*Download Ollama from their official website and install it on your system.
*Install CodeLlama Model
*ollama pull codellama:7b

###4️⃣ Start the Backend (Express + Ollama).
```sh
*node backend/server.js
```

###5️⃣ Start the Frontend.
```sh
*npm run dev
```
