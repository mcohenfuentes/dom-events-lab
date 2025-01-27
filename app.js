/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/
let currentValue = ''; 
let previousValue = ''; 
let operator = ''; 

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
  // Handle numbers
  if (event.target.classList.contains('number')) {
    const number = event.target.innerText;
    currentValue += number; 
    display.innerText = currentValue; 
    
  }

  // Handle operators
  if (event.target.classList.contains('operator')) {
    operator = event.target.innerText; 
    previousValue = currentValue; 
    currentValue = ''; 
  }
  

/*-------------------------------- Functions --------------------------------*/
function addNumbers(a, b) {
  return a + b;
}

function subtractNumbers(a, b) {
  return a - b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

function divideNumbers(a, b) {
  return a / b;
}