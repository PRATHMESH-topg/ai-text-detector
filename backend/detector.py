import joblib

# Load the saved model once when this module is imported
model = joblib.load("model.pkl")

def predict_text(text: str) -> str:
    """
    Predict if the given text is AI-generated or human-written.
    Returns 'AI-Generated' or 'Human-Written'.
    """
    prediction = model.predict([text])[0]
    return "AI-Generated" if prediction == 1 else "Human-Written"

