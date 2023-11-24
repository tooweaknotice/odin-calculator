let numA = ``;
let numB = ``;
let lastOperator = ``;
let operator = ``;
let display = document.querySelector(`.display`);
let btnNumber = document.querySelectorAll(`.number`);

reset();

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
    lastOperator = operator;
  })
}
);

let btnClear = document.querySelector(`.clear`);
btnClear.addEventListener(`click`, (e) => {
  reset();
})

function reset(){
  numA = ``;
  numB = ``;
  lastOperator = ``;
  operator = ``;
  display.textContent = 0;
}

function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b){
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