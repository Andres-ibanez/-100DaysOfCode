const container = document.querySelector('.numbers');
const display = document.querySelector('.display')
let [valueA, valueB, total] = [0, 0, 0];
let operation;

const addition = (value) => {
    valueA = parseFloat(value);
    operation = '+';
    eraseContent();
};

const subtraction = (value) => {
    valueA = parseFloat(value);
    operation = '-';
    eraseContent();
};

const multiplication = (value) => {
    valueA = parseFloat(value);
    operation = '*';
    eraseContent();
};

const division = (value) => {
    valueA = parseFloat(value);
    operation = '/';
    eraseContent();
};

const percentage = (value) => {
    valueA = parseFloat(value);
    operation = '%';
    eraseContent();
};

const equal = (value) => {
    valueB = parseFloat(value);
    eraseContent();
    switch (operation) {
        case '+':
            total = valueA + valueB;
            displayValue(total);
            break;
        case '-':
            total = valueA - valueB;
            displayValue(total);
            break;
        case '*':
            total = valueA * valueB;
            displayValue(total);
            break;
        case '/':
            total = (valueB == 0) ? 'ERROR' : (valueA / valueB);
            displayValue(total);
            break;
        case '%':
            total = valueA * valueB / 100;
            displayValue(total);
            break;
    }
};

const displayValue = (textElement) => {
    display.value += textElement;
};

const eraseContent = () => {
    display.value = '';
}

const changeSymbol = (value) => {
    const change = parseFloat(value) * (-1);
    eraseContent();
    displayValue(change)
};

container.addEventListener('click', (e) => {
    const elementTarget = e.target;
    const textElement = elementTarget.textContent
    if (elementTarget.classList.contains('addition')) addition(display.value);
    else if (elementTarget.classList.contains('subtraction')) subtraction(display.value);
    else if (elementTarget.classList.contains('multiplication')) multiplication(display.value);
    else if (elementTarget.classList.contains('division')) division(display.value);
    else if (elementTarget.classList.contains('equal')) equal(display.value);
    else if (elementTarget.classList.contains('changeSymbol')) changeSymbol(display.value);
    else if (elementTarget.classList.contains('percentage')) percentage(display.value);
    else if (elementTarget.classList.contains('erase')) {
        eraseContent();
        [valueA, valueB, total] = [0, 0, 0];
    }
    else displayValue(textElement);
});