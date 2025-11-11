let numBtn = document.querySelectorAll('.num');
let operaterBtns = document.querySelectorAll('.operator');
let equalBtn = document.querySelector('.equal');
let clearBtn = document.querySelector('.clear');
let resultDisplay = document.querySelector('.result');
let allClearBtn = document.querySelector('.allClear');

let computableStr = '';
let calculationDisplay = document.querySelector('.calculation');

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
    if(b === 0){
        computableStr = '';
        return 'Cannot Divide By Zero'
    } else {
        return a/b
    }
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




numBtn.forEach((btn)=>{
    btn.addEventListener('click',function(){
        if(resultDisplay.innerText.length > 0){
            computableStr = '';
            calculationDisplay.innerText = computableStr;
            resultDisplay.innerText = '';
            displayCalc(btn)
        } else {
            displayCalc(btn)
        }
    })
})
operaterBtns.forEach((btn)=>{
    btn.addEventListener('click',function(){
        if(computableStr.includes('+') || computableStr.includes("-") || computableStr.includes("*") || computableStr.includes('/') ){
            let prevCalcVal = calculate();
            computableStr = '';
            calculationDisplay.innerText = computableStr;
            computableStr+=prevCalcVal;
            calculationDisplay.innerText = computableStr;
            computableStr+=btn.innerText
            calculationDisplay.innerText = computableStr;

            
        } else {
            displayCalc(btn)
        }
    })
})

function displayCalc(btn){
    computableStr+=btn.innerText;
        calculationDisplay.innerText = computableStr;
}

function calculate(){
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

    return result;

}

equalBtn.addEventListener('click',calculate)
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



