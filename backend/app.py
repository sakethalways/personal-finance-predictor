from flask import Flask, request, jsonify
import numpy as np
import joblib
import os

app = Flask(__name__)

# Load the trained model
model_path = 'backend/model.pkl'
if not os.path.isfile(model_path):
    raise FileNotFoundError(f"Model file does not exist: {model_path}")
model = joblib.load(model_path)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    
    # Extracting the input values
    income = data['income']
    essentials = data['essentials']
    discretionary = data['discretionary']
    savings = data['savings']
    
    # Prepare the input data for the model
    input_data = np.array([[income, essentials, discretionary, savings]])
    
    # Make prediction using the model
    prediction = model.predict(input_data)
    
    # Return the prediction result
    return jsonify({'predicted_savings': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)
