#  AI-Based Sentiment and Emotion Analysis Web App

This full-stack web application performs **real-time sentiment and emotion analysis** on user-input text. It uses NLP techniques with VADER (NLTK) and keyword-based emotion detection to give detailed insights and visualizations.
---



##  Key Features

-  Analyze Sentiment: Positive, Negative, Neutral
-  Detect Emotions via keyword mapping (Joy, Fear, Sadness...)
-  Pie Chart (Sentiment) & Bar Chart (Emotions)
-  Real-time text processing with feedback
-  Uses VADER SentimentIntensityAnalyzer from NLTK
-  Fully CORS-enabled for frontend-backend communication
-  Hosted with Vercel (frontend) and Render (backend)

---

##  Tech Stack

### Frontend:
- React.js + TypeScript
- Tailwind CSS (utility-first styling)
- Chart.js (visualization)
- Vite (build tool)

### Backend:
- Python (Flask)
- NLTK (VADER Sentiment)
- Matplotlib (for optional charts)
- Flask-CORS

---

##  Project Structure

```
Sentiment-Analysis/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/        # Reusable UI Components
│   │   ├── pages/             # Main UI Layout and Pages
│   │   ├── utils/             # API & helper functions
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.cjs
│   └── vite.config.ts
│
├── backend/
│   ├── main.py               # Flask App with /analyze route
│   ├── stopwords.txt         # List of ignored words
│   └── emotions.txt          # Word-emotion mapping
│
├── .gitignore
└── README.md
```


##  Live Demo

 **Website**: [https://sentiment-analysis-gamma-nine.vercel.app/](https://sentiment-analysis-gamma-nine.vercel.app/)  

---

##  Sample UI Screens

| Main Dashboard | Chart View |
|----------------|------------|
| ![UI Screenshot1](https://github.com/yashika-ranjan/Sentiment_Analysis/blob/main/frontend/public/Screenshot%201.png)| ![UI Screenshot2](https://github.com/yashika-ranjan/Sentiment_Analysis/blob/main/frontend/public/Screenshot%202.png)|
![UI Screenshot3](https://github.com/yashika-ranjan/Sentiment_Analysis/blob/main/frontend/public/Screenshot%203.png)|


---

##  How to Run Locally

###  Backend (Flask)
```bash
cd backend
pip install -r requirements.txt
python main.py
```

###  Frontend (React)
```bash
cd frontend
npm install
npm run dev
```

---

##  API Usage

### `POST /analyze`
**Request:**
```json
{
  "text": "I am excited and proud of my achievements!"
}
```

**Response:**
```json
{
  "sentiment": "Positive",
  "score": {
    "pos": 0.63,
    "neg": 0.04,
    "neu": 0.33
  },
  "explanation": "Your text reflects a positive attitude or mood.",
  "tip": "Keep spreading positivity! Positive writing often inspires others.",
  "emotions": {
    "joy": 2,
    "pride": 1
  },
  "chart_data": { ... },
  "pie_data": { ... }
}
```

---

##  DEveloper

**Yashika **  
 B.Tech CSE, Delhi Technological University (DTU)

---

##  GitHub Repo

[👉 View Source Code](https://github.com/yashika-ranjan/Sentiment_Analysis)