import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import joblib

# Load a sample financial dataset
data = pd.read_csv('data/financial_data.csv')

# Define the features and target variable
X = data[['income', 'essentials', 'discretionary', 'savings']]
y = data['future_savings']  # Assuming 'future_savings' is the column we're predicting

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create a simple linear regression model
model = LinearRegression()

# Train the model
model.fit(X_train, y_train)

# Save the trained model to a file
joblib.dump(model, 'backend/model.pkl')

print("Model trained and saved successfully.")
