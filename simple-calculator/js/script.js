let reset = document.querySelector('.reset');
let keyPress = document.querySelectorAll('.button');
let evaluate = document.querySelector('.evaluate');
let output = document.querySelector('.output');

let expression = '';
let operatorValue = '';
let finalExpression = '';
let operatorPressCount = 0;

resetScreen = () => {
    expression = '';
    operatorValue = '';
    finalExpression = '';
    operatorPressCount = 0;

}

for(let i = 0; i < keyPress.length; i++) {
    keyPress[i].addEventListener('click', function() {       
        expression += keyPress[i].value;
        operatorPressCount = 0;
    })
}

let oPress = document.querySelectorAll('.operator');


for(let i = 0; i< oPress.length; i++) {
    oPress[i].addEventListener('click', function() {
        operatorPressCount += 1;
        
        operatorValue = oPress[i].value;
        
        if (operatorPressCount <= 1) {
            expression += operatorValue;
        }
    })
}

evaluate.addEventListener('click', function(){
    let lastElement = expression[expression.length - 1];
    let newExpression = '';

    if (lastElement === '+' || lastElement === '-' || lastElement === '*' || lastElement === '/') {
        newExpression = expression.substring(0, expression.length - 1)
    } else {
        newExpression = expression;
    }
    output.textContent = eval(newExpression);
    resetScreen();
    
})

reset.addEventListener('click', function() {
    resetScreen();
    output.textContent = '';
})


