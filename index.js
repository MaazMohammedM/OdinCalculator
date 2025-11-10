function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b
}
function mutiply(a,b){
    return a*b
}
function divide(a,b){
    return a/b
}

function operate(operater,a,b){
    switch(operater){
        case "+":
           return  add(a,b)
        case "-":
            return subtract(a,b)
        case "*":
            return  mutiply(a,b)
        case "/":
             return divide(a,b)
        default:
            return "Provide appropiate operator";
    }
}

let numBtn = document.querySelectorAll('.num');
let operaterBtns = document.querySelectorAll('.operator');
let equalBtn = document.querySelector('.equal');
let clearBtn = document.querySelector('.clear');
let resultDisplay = document.querySelector('.result');
let allClearBtn = document.querySelector('.allClear');

let computableStr = '';
let calculationDisplay = document.querySelector('.calculation');


numBtn.forEach((btn)=>{
    btn.addEventListener('click',function(){
        displayCalc(btn)
    })
})
operaterBtns.forEach((btn)=>{
    btn.addEventListener('click',function(){
        displayCalc(btn)
    })
})

function displayCalc(btn){
    computableStr+=btn.innerText;
        calculationDisplay.innerText = computableStr;
}

equalBtn.addEventListener('click',function(){
    let operater = '';
    if(computableStr.includes('+')){
        operater = "+"
    } else if(computableStr.includes("-")){
        operater = '-'
    } else if(computableStr.includes("*")){
        operater = "*"
    } else if(computableStr.includes('/')){
        operater = "/"
    }

    let splitedArr = computableStr.split(operater);
    let numOne = +splitedArr[0];
    let numTwo = +splitedArr[1];

    console.log(numOne, numTwo, operater)

    let result = operate(operater,numOne,numTwo);
    resultDisplay.innerText = result;


})
clearBtn.addEventListener('click',function(){
    computableStr = computableStr.slice(0,-1);
    calculationDisplay.innerText = computableStr;
    console.log(computableStr)
})

allClearBtn.addEventListener('click',function(){
    computableStr = '';
    calculationDisplay.innerText = '';
    resultDisplay.innerText = '';
})



