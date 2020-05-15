// class Calculator {

//     constructor() {
//         this.result = 0;
//     }
//     add(b) {
//         this.result += b;
//         return this.result
//     }
//     subtract(b) {
//         this.result -= b;
//         return this.result
//     }
//     multiply(b) {
//         this.result *= b;
//         return this.result
//     }
//     divide(b) {
//         this.result /= b;
//         return this.result
//     }
//     clear() {
//         this.result = 0;
//         return this.result
//     }
//     setFirstNum(a) {
//         this.result = a;
//     }

// }
// let calc = new Calculator();
// let currentResult = 0;

function updateLive(expression) {
    let live = document.getElementById('live');
    live.innerText = expression;
    return
}

function setOutput(out) {
    let output = document.getElementById('out');
    output.innerText = out;
}

function deleteLast(expression) {
    expression = expression.substr(0, expression.length - 1);
    return expression
}

function calculate(expression) {
    output = eval(expression);
    return output
}

let expression = "";

let out = document.getElementById('out');
out.innerText = 0;

let buttonList = document.querySelectorAll('button');

buttonList.forEach((button) => (
    button.addEventListener('click', () => {
        if (button.id != 'ce' && button.id != 'ac' && button.id != 'equal') {
            if (expression.length < 17) {
                expression += button.innerText;
                updateLive(expression);
            }
        }
        else if (button.id == 'ce') {
           expression = deleteLast(expression);
           updateLive(expression);
        }
        else if (button.id == 'ac') {
            expression = "";
            output = "";
            updateLive(expression);
            setOutput(output);
        }
        else if (button.id == 'equal') {
            output = calculate(expression);
            updateLive(output);
            setOutput(output);
        }
    })
))

