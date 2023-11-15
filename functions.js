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


function calculateVolumeAndArea(length) {
    if (typeof(length) !== "number" || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`
}

calculateVolumeAndArea(5);


function getCoupeNumber(number) {
    if (typeof(number) !== "number" || number < 0 || !Number.isInteger(number)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (number === 0 || number > 36) {
        return "Таких мест в вагоне не существует";
    }

    let result;
    result = Math.ceil((number / 36) * 9);
    console.log(result);
}

getCoupeNumber(1);


function getTimeFromMinutes(num) {
    if (typeof(num) !== "number" || !Number.isInteger(num) || num < 0) {
        return "Ошибка, проверьте данные";
    }

    let time;
    let minutes;
    time = Math.floor(num / 60);
    minutes = num - (time * 60);

    let hoursStr = "";
    switch (time) {
        case 0:
            hoursStr = "часов";
            break;
        case 1:
            hoursStr = "час";
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = "часа";
            break;
        default:
            hoursStr = "часов";
    }

    return `Это ${time} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(150);

function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== "number" || 
    typeof(b) !== "number" ||
    typeof(c) !== "number" ||
    typeof(d) !== "number") {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}

console.log(findMaxNumber(1, 5, 6.6, 11));



