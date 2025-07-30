import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
import joblib

# Load the dataset
df = pd.read_csv("data.csv")

# Define features and labels
X = df["text"]
y = df["label"]

# Create pipeline: TF-IDF + Logistic Regression
model = Pipeline([
    ('tfidf', TfidfVectorizer()),
    ('clf', LogisticRegression())
])

# Train the model
model.fit(X, y)

# Save the model to a file
joblib.dump(model, "model.pkl")

print("✅ Model trained and saved as model.pkl")

