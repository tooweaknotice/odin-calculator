let numA = ``;
let numB = ``;
let lastOperator = ``;
let operator = ``;
let display = document.querySelector(`.display`);

reset();

let btnNumber = document.querySelectorAll(`.number`);
btnNumber.forEach(btn => {
  btn.addEventListener(`click`, (e) => {
    if (operator === ``){
      numA = numA.concat(e.target.innerText);
      display.textContent = numA;
    }
    else {
      numB = numB.concat(e.target.innerText);
      display.textContent = numB;
    }
  })
}
);

let btnOperator = document.querySelectorAll(`.operator`);
btnOperator.forEach(btn => {
  btn.addEventListener(`click`, (e) => {
    operator = e.target.innerText;
    if (numB !== ``){
      numA = operate(numA, numB, lastOperator);
      numB = ``;
      display.textContent = numA;
    }
    if (operator !== `=`){
      lastOperator = operator;
    }
  })
}
);

let btnClear = document.querySelector(`.clear`);
btnClear.addEventListener(`click`, (e) => {
  reset();
})

let btnBackspace = document.querySelector(`.backspace`);
btnBackspace.addEventListener(`click`, (e) => {
  if (operator === ``){
    if (numA.length > 1) {
      numA = numA.substring(0, numA.length - 1);
    }
    else {
      numA = `0`;
    }
    display.textContent = numA;
  }
  else { 
    if (numB.length > 1){
      numB = numB.substring(0, numB.length - 1);
    }
    else {
      numB = `0`;
    }
    display.textContent = numB;
  }
})

function reset(){
  numA = ``;
  numB = ``;
  lastOperator = ``;
  operator = ``;
  display.textContent = 0;
}

function add(a, b = 0){
  return a + b;
}

function subtract(a, b = 0){
  return a - b;
}

function multiply(a, b = 1){
  return a * b;
}

function divide(a, b = 1){
  return a / b;
}

function operate(a, b, operator){
  switch (operator){
    case `+`:
      return add(+a, +b);
    case `-`:
      return subtract(+a, +b);
    case `*`:
      return multiply(+a, +b);
    case `/`:
      return divide(+a, +b);
    case `=`:
      return;
  }
}