let expression = "";
let out = document.getElementById('out');
let buttonList = document.querySelectorAll('button');
let buttonArr = Array.from(buttonList);
let buttonKeys = buttonArr.map((button) => (button.dataset.key));
let specialKeys = ['Enter', 'Backspace', 'Escape'];

out.innerText = 0;

function updateLive(expression) {
    let live = document.getElementById('live');
    live.innerText = expression;
    return
}

// sets the output p tag with the output of calculation
function setOutput(out) {
    let output = document.getElementById('out');
    output.innerText = out;
}

// deletes last single entry in calculator, ran when backspace is pressed
// or when ce is clicked
function deleteLast(expression) {
    expression = expression.substr(0, expression.length - 1);
    return expression
}

// ran when enter or equal button is pressed or clicked
function calculate(expression) {
    output = eval(expression);
    return output
}

// check which key was pressed and execute action associated
function keyCheck(event) {
    if (buttonKeys.includes(event.key)){
        if (specialKeys.includes(event.key)) {
            switch (event.key) {
                case 'Enter':
                    output = calculate(expression);
                    updateLive(output);
                    setOutput(output);
                    break;
                case 'Backspace':
                    expression = deleteLast(expression);
                    updateLive(expression);
                    break;
                case 'Escape':
                    expression = "";
                    output = "0";
                    updateLive(expression);
                    setOutput(output);
                    break;
            }
        }
        else if (expression.length < 17) {
            expression += event.key;
            updateLive(expression);
        }
    }
} 

// event listeners for click and key downs
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
            output = "0";
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

window.addEventListener('keydown', keyCheck);
