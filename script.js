let srt;
let stringLength;

let char;
let numChar;
let stringNumChars;
let stringNumCharsNum;
let stringNumCharsSimb;
let stringIs;

const displayStr = () => {
    str = document.getElementById("stringInput").value;
    stringLength = str.length;
    document.getElementById('stringIs').innerHTML = `ДЛИНА СТРОКИ ${stringLength} СИМВОЛОВ`;

    // Считаем сколько букв в строке 
    const regexLetters = /[a-zA-Z-А-Яа-я]/g;
    const foundLetters = str.match(regexLetters);
    if (foundLetters == null) {
        document.getElementById('stringNumChars').innerHTML = "В строке нет букв";
    } else {
        document.getElementById('stringNumChars').innerHTML = "ВСЕГО букв в строке: " + foundLetters.length;
    }

    // Считаем сколько цифр в строке
    const regexNumbers = /[0-9]/g;
    const foundNumbers = str.match(regexNumbers);
    if (foundNumbers == null) {
        document.getElementById('stringNumCharsNum').innerHTML = "В строке нет цифр";
    } else {
        document.getElementById('stringNumCharsNum').innerHTML = "ВСЕГО цифр в строке: " + foundNumbers.length;
    }

    // Считаем сколько спецсимволов в строке 
    const regexSymbols = /[$&+,:;=?@#|'<>.^*()%!-]/g;
    const foundSymbols = str.match(regexSymbols);
    if (foundSymbols == null) {
        document.getElementById('stringNumCharsSimb').innerHTML = "В строке нет спецсимволов";
    } else {
        document.getElementById('stringNumCharsSimb').innerHTML = "ВСЕГО спецсимволов в строке: " + foundSymbols.length;
    }
}

// Считаем сколько выбранных символов в строке
const displayChar = () => {
    char = document.getElementById("charInput").value;

    // Преобразовываем строку в массив
    let arr = str.split('');
    // Считаем сколько символов 
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == char) {
            res++;
        }
        document.getElementById('charNumIs').innerHTML = "Количество выбранных символов в строке: " + res;
    }
}

function myFunctionRefresh() {
    document.getElementById("stringIs").innerHTML = ``;
    document.getElementById("stringInput").value = ``;
    document.getElementById("stringNumChars").innerHTML = ``;
    document.getElementById("stringNumCharsNum").innerHTML = ``;
    document.getElementById("stringNumCharsSimb").innerHTML = ``;
}

function myFunctionRefreshChar() {
    document.getElementById("charIs").innerHTML = ``;
    document.getElementById("charInput").value = ``;
    document.getElementById("charNumIs").innerHTML = ``;
}