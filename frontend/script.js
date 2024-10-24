document.getElementById('finance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const income = document.getElementById('income').value;
    const essentials = document.getElementById('essentials').value;
    const discretionary = document.getElementById('discretionary').value;
    const savings = document.getElementById('savings').value;
    
    const formData = {
        income: parseFloat(income),
        essentials: parseFloat(essentials),
        discretionary: parseFloat(discretionary),
        savings: parseFloat(savings)
    };
    
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('prediction-result').innerText = 'Predicted Savings: ' + data.predicted_savings;
    })
    .catch(error => console.error('Error:', error));
});
