# 🧠 AI-Generated Content Detection System

This project is an **end-to-end machine learning system** that detects whether a given text is **AI-generated** or **human-written**.  
It combines a **FastAPI backend** (for ML model inference) with a **React + Material UI frontend** (for user interaction).  

---

## 📌 Features
- 🔍 **AI vs Human Text Detection** using an ML model trained on labeled datasets.  
- ⚡ **FastAPI Backend** serving predictions via a REST API.  
- 🎨 **React Frontend** with a modern dark theme built using **Material UI**.  
- 🖼️ **Attractive UI** with text input box, real-time prediction, and result highlighting.  
- 📂 Modular project structure for backend and frontend.  

---

## 🏗️ Project Structure

AI-Gen Detection/
├── backend/
│ ├── main.py # FastAPI app (API endpoints)
│ ├── detector.py # Model loading & prediction logic
│ ├── model.pkl # Trained ML model
│ ├── combine_datasets.py # Script to merge human & AI text datasets
│ ├── human_data.csv # Human-written text dataset
│ ├── ai_data.csv # AI-generated text dataset
│ ├── data.csv # Combined dataset
│ ├── requirements.txt # Backend dependencies
│
├── frontend/ (React App)
│ ├── src/
│ │ ├── App.js # Main UI component
│ │ ├── index.js # React entry point
│ ├── package.json # Frontend dependencies
│
└── README.md # Project documentation

## ⚙️ Tech Stack
- **Backend:** FastAPI, Scikit-learn, Pandas, Joblib, Uvicorn  
- **Frontend:** React, Material UI, JavaScript, HTML, CSS  
- **Version Control:** Git & GitHub

📊 Dataset

human_data.csv → contains human-written sentences/essays/articles.

ai_data.csv → contains AI-generated text (from models like ChatGPT).

Both datasets are combined into data.csv for training.

🖼️ Frontend Preview

Dark theme UI with header "CONTENT DETECTION"

Transparent text box for user input

"Send" button triggers backend API and displays result (AI or Human)

Result is color-coded:

🟥 Red → AI-Generated

🟩 Green → Human-Written
