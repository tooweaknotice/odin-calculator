let num = ``;
let lastOperator = ``;
let operator = ``;
let result = ``;
let display = document.querySelector(`.display`);

let btnNumber = document.querySelectorAll(`.number`);
btnNumber.forEach(btn => {
  btn.addEventListener(`click`, (e) => {
    if (result === ``){
      result = result.concat(e.target.innerText);
      display.textContent = result;
    }
    else {
      num = num.concat(e.target.innerText);
      display.textContent = num;
    }
  })
}
);

let btnOperator = document.querySelectorAll(`.operator`);
btnOperator.forEach(btn => {
  btn.addEventListener(`click`, (e) => {
    operator = e.target.innerText;
    if (result !== `` && num !== ``){
      result = operate(result, num, lastOperator);
      num = ``;
      display.textContent = result;
    }
    if (operator === `=`){
      reset();
    }
    lastOperator = operator;
  })
}
);

let btnClear = document.querySelector(`.clear`);
btnClear.addEventListener(`click`, (e) => {
  reset();
  display.textContent = 0;
})

function reset(){
  num = ``;
  lastOperator = ``;
  operator = ``;
  result = ``;
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