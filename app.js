/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
display.innerText = '0';
/*-------------------------------- Variables --------------------------------*/
let currentValue = ''; 
let previousValue = ''; 
let operator = ''; 
let total = '';
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
    if (event.target.innerText === 'C') {
      currentValue = '';
      previousValue = '';
      operator = '';
      total = '';
      display.innerText = '0';
    } else {
      operator = event.target.innerText; 
      previousValue = currentValue; 
      display.innerText = operator; 
      currentValue = ''; 

    }
    
  }

  if (event.target.classList.contains('equals')) {
    if (operator === '+') {
     total = addNumbers(previousValue, currentValue)
     display.innerText = total;
    }
    else if (operator === '-') {
      total = subtractNumbers(previousValue, currentValue)
      display.innerText = total;
    }
    else if (operator === '*') {
      total = multiplyNumbers(previousValue, currentValue)
      display.innerText = total;
    }
    else if (operator === '/') {
      total = divideNumbers(previousValue, currentValue)
      display.innerText = total;
    }
     if (event.target.classList.contains('clear')) { 
      total = '0'
      currentValue = '0'
      previousValue = '0'
      display.innerText = '0'
  }
  }
/*-------------------------------- Functions --------------------------------*/
function addNumbers(a, b) {
  return Number(a) + Number(b);
}

function subtractNumbers(a, b) {
  return Number(a) - Number(b);
}

function multiplyNumbers(a, b) {
  return Number(a) * Number(b);
}

function divideNumbers(a, b) {
  return Number(a) / Number(b);
}

function clearCalculator() {
  return 0
}
})