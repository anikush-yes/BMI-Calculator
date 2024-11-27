const heightInput = document.querySelector('.height');
const weightInput = document.querySelector('.weight');
const calculateButton = document.querySelector('.calculate');
const resetButton = document.querySelector('.reset');
const resultDiv = document.querySelector('.result');

// KMI apskaičiavimo funkcija
function calculateBMI() {
    const height = parseFloat(heightInput.value) / 100; // Konvertuojame į metrus
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.textContent = 'Please enter valid height and weight!';
        resultDiv.style.color = 'red';
        return;
    }

    const bmi = weight / (height ** 2);
    let category = '';

    // KMI kategorijos nustatymas

    let color;

if (bmi < 18.5) {
    category = 'Underweight';
    color = 'red';  
} else if (bmi >= 18.5 && bmi < 25) {
    category = 'Normal weight';
    color = 'green';  
} else if (bmi >= 25 && bmi < 30) {
    category = 'Overweight';
    color = 'red'; 
} else {
    category = 'Obese';
    color = 'red';  
}


    // Rezultato atvaizdavimas
    resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
    resultDiv.style.color = color;
    resetButton.classList.remove('hidden');
    
}


// Laukų išvalymo funkcija
function resetInputs() {
    heightInput.value = '';
    weightInput.value = '';
    resultDiv.textContent = '';
}

// Įvykių klausytojų pridėjimas
calculateButton.addEventListener('click', calculateBMI);
resetButton.addEventListener('click', resetInputs);


