function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Променлива за записване на текущия вход
let currentInput = '';

// Функция за обработка на събитие при натискане на клавиш
function handleKeyPress(e) {
    const key = e.key;

    // Проверка дали натиснатият клавиш е цифра или оператор
    if (/[0-9+\-*/.=]/.test(key)) {
        currentInput += key;
        updateDisplay();
    } else if (key === 'Enter') { // Ако е натиснат Enter, изчислете израза
        evaluateExpression();
    } else if (key === 'Escape') { // Ако е натиснат Escape, изчистете входа
        clearInput();
    }
}

// Функция за актуализация на дисплея
function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentInput;
}

// Функция за изчистване на входа
function clearInput() {
    currentInput = '';
    updateDisplay();
}

// Функция за изчисление на израза
function evaluateExpression() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        // Обработка на грешките
        console.error(error);
        alert('Expression error.');
        clearInput();
    }
}

// Добавете слушател на събития за натискане на клавиши
document.addEventListener('keydown', handleKeyPress);

// ...

// Функция за обработка на събитие при натискане на клавиш
function handleKeyPress(e) {
    const key = e.key;

    if (key === 'Backspace') { // Ако е натиснат клавиш Backspace
        currentInput = currentInput.slice(0, -1); // Изтриване на последния символ
        updateDisplay();
    } else if (/[0-9+\-*/.=]/.test(key)) {
        currentInput += key;
        updateDisplay();
    } else if (key === 'Enter') {
        evaluateExpression();
    } else if (key === 'Escape') {
        clearInput();
    }
}

// ...

// Променливи за промяна на темата
const body = document.body;
const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');
const buttons = document.querySelector('.buttons');
const themeToggle = document.getElementById('theme-toggle');

// Функция за превключване на темата
function toggleTheme() {
    // Проверка на текущата тема и превключване
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
}

// Слушател на бутона за превключване на темата
themeToggle.addEventListener('click', toggleTheme);
