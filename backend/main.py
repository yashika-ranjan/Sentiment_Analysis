from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import string
from collections import Counter
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import nltk
import matplotlib.pyplot as plt
import os


try:
    nltk.data.find('sentiment/vader_lexicon')
except LookupError:
    nltk.download('vader_lexicon')

app = Flask(__name__)
CORS(app)


# Relative paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STOPWORDS_PATH = os.path.join(BASE_DIR, r'C:\Users\magad\OneDrive\Desktop\C++\Sentiment Analysis\backend\stopwords.txt')
EMOTIONS_PATH = os.path.join(BASE_DIR, r'C:\Users\magad\OneDrive\Desktop\C++\Sentiment Analysis\backend\emotions.txt')

# Load stopwords
with open(STOPWORDS_PATH, "r") as sw:
    stop_words = set(sw.read().split())

# Load emotions
emotions_dict = {}
with open(EMOTIONS_PATH, "r") as f:
    for line in f:
        clean_line = line.strip().replace("'", "")
        if ':' in clean_line:
            word, emotion = clean_line.split(':')
            emotions_dict[word.strip()] = emotion.strip()

sid = SentimentIntensityAnalyzer()


def analyze_text(text):
    lower_case = text.lower()
    cleaned_text = lower_case.translate(str.maketrans('', '', string.punctuation))
    tokenized_words = cleaned_text.split()
    final_words = [w for w in tokenized_words if w not in stop_words]

    emotion_list = [emotions_dict.get(word) for word in final_words if emotions_dict.get(word)]
    emotion_count = Counter(emotion_list)
    if not emotion_count:
        emotion_count = {"none_detected": 1}

    score = sid.polarity_scores(text)
    sentiment = "Neutral"
    explanation = "Your text has a balanced tone."
    tip = "Try to use more emotive words to convey clear sentiments."

    if score['pos'] > score['neg']:
        sentiment = "Positive"
        explanation = "Your text reflects a positive attitude or mood."
        tip = "Keep spreading positivity! Positive writing often inspires others."
    elif score['neg'] > score['pos']:
        sentiment = "Negative"
        explanation = "Your text reflects concerns, dissatisfaction, or negative tone."
        tip = "Consider offering constructive suggestions along with criticism."


    max_emotion = emotion_count.most_common(1)[0][0]

    chart_data = {
        'labels': list(emotion_count.keys()),
        'values': list(emotion_count.values()),
        'highlight': max_emotion
    }

    pie_data = {
        'labels': ['Positive', 'Negative', 'Neutral'],
        'values': [score['pos'], score['neg'], score['neu']]
    }

    return {
        'emotions': emotion_count,
        'sentiment': sentiment,
        'score': score,
        'explanation': explanation,
        'tip': tip,
        'chart_data': chart_data,
        'pie_data': pie_data
    }

@app.route('/analyze', methods=['POST'])
def analyze_api():
    data = request.get_json()
    if not data or 'text' not in data:
        return jsonify({'error': 'No text provided'}), 400

    text = data['text']
    try:
        result = analyze_text(text)
        return jsonify(result)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)



