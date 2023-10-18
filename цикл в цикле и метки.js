"use strict";

for (let i = 0; i < 3; i++) {
  console.log(i);
  for (let j = 0; j < 3; j++) {
    console.log(j);
  }
}

// *
// **
// ***
// ****
// *****
// ******

// let result = "";
// const lenght = 7

// for (let i = 1; i < lenght; i++) {
//   for (let j = 0; j < i; j++) {
//     result += "*";
//   }

//   result += "\n";
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) {
//         break first;
//       }
//       console.log(`Third level: ${k}`);      
//     }
//   }
// }

// for (let i = 5; i <= 10; i++) {
//   arrayOfNumbers[i - 5] = i;
// }
// console.log(arrayOfNumbers);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }
// console.log(result);


// const array = [5, 10, "Shopping", 20, "Homework"];
// for (let i = 0; i < array.length; i++)
//     if (typeof(array[i]) === "number")
//         array[i] *= 2;
//     else if (typeof(array[i]) === "string")
//         array[i] = `${array[i]} - done`;

// console.log(array);


// const data = [ 5, 10, "Shopping", 20, "Homework" ];
// const result = [];

// data.reverse();
// for (let i = 0; i < data.length; i++) {
//     result[i] = data[i];
// }
// console.log(result);


const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 1; i <= data.length; i++) {
     result[i - 1] = data[data.length - i]
}

    console.log(result);