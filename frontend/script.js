const form = document.getElementById('finance-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const income = document.getElementById('income').value;
    const essentials = document.getElementById('essentials').value;
    const discretionary = document.getElementById('discretionary').value;
    const savings = document.getElementById('savings').value;

    const data = {
        income: Number(income),
        essentials: Number(essentials),
        discretionary: Number(discretionary),
        savings: Number(savings)
    };

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const predictionResult = document.getElementById('prediction-result');
        predictionResult.innerHTML = `Predicted Savings: ${data.predicted_savings}`;
    })
    .catch(error => {
        console.error('Error:', error);
        const predictionResult = document.getElementById('prediction-result');
        predictionResult.innerHTML = 'Error: Unable to make prediction.';
    });
});
