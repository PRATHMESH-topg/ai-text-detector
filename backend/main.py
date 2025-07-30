from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from detector import predict_text

app = FastAPI()

# Allow frontend requests (adjust origin for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace * with your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextInput(BaseModel):
    text: str

@app.post("/predict")
def detect_ai_content(input: TextInput):
    result = predict_text(input.text)
    return {"result": result}

