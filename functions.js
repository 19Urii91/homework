"use strict";

let num = 20;

function showFirstMessage (text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

// function calc (a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

function ret () {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log("Hello");
};

logger();

const calc = (a, b) => {
    console.log("1");
    return a + b;
};

const usdCurr =  28;
const discount = 0.9;

function convert (amount, curr) {
    return
    curr * amount;
}

function promotion (result) {
    console.log(result * discount);
    return undefined;
}

const res = convert(500, usdCurr);
promotion(res);

function test () {
    for (let i =0; i < 5; i++) {
        console.log(i);
        if (i === 3) return;
    }
    console.log("Done");
}

test();

function doNothing () {}
console.log(doNothing() === undefined);


// First exercise
function greetSubject (name) {
    return `Привет, ${name}!`;
}
greetSubject("Urii");

// Second exercise
function returnNeighboringNumbers (number) {
    return [number - 1, number, number + 1];
}
returnNeighboringNumbers(5);

// Third exercise
function getMathResult (number, amount) {
    if (typeof(amount) !== "number" || amount <= 0) {
        return number;
    }

    let string = "";

    for (let i = 1; i <= amount; i++) {
        if (i === amount) {
            string += `${number * i}`;
        } else {
            string += `${number * i}---`;
        }
    }
    return string;
}
getMathResult(5, 3);


/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres



