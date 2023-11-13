let numA = ``;
let numB = ``;
let strA = ``;
let strB = ``;
let lastOperator = ``;
let operator = ``;
let result = ``;
let display = ``;

let btnNumber = document.querySelectorAll(`.number`);
btnNumber.forEach(btn => {
  btn.addEventListener(`click`, (e) => {
    if (result === ``){
      result = result.concat(e.target.innerText);
      console.log(`Result is ` + result);
    }
    else {
      numB = numB.concat(e.target.innerText);
      console.log(`numB is ` + numB);
    }
  })
}
);

let btnOperator = document.querySelectorAll(`.operator`);
btnOperator.forEach(btn => {
  btn.addEventListener(`click`, (e) => {
    operator = e.target.innerText;
    if (result !== `` && numB !== ``){
      result = operate(result, numB, lastOperator);
      numB = ``;
      console.log(`Result is ` + result);
    }
    lastOperator = operator;
  })
}
);

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