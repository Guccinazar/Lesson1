// Task 1
// let firstNumber=prompt("Enter the beginning of the range","");
// let lastNumber=prompt("Enter the end of the range","");
// let sum=0;
 
// while(firstNumber < lastNumber){
//        firstNumber++;
//        sum+=firstNumber;    
//     }
 
// alert(sum)

// Task 2
// let firstNumber= +prompt("Enter the first number","");
// let lastNumber= +prompt("Enter the second number","");

// while (lastNumber) {
//   let divider = lastNumber;
//   lastNumber = firstNumber % lastNumber;
//   firstNumber = divider;
// }

// alert(`The largest common divis is ${firstNumber}`);

// Task 3
// let number = +prompt('Please enter some number');

// const initialNumber = number;

// document.write(`All dividers: \n`);

// while (number > 0) {
//     if (initialNumber % number === 0) {
//         document.write(`${number}\n`);
//     }
//     number--;
// }

// Task 4
// let enterNumber = prompt('Please, enter any number');
// let counting = 0;

// for (let i=0; i < enterNumber.length; i++) {
//     counting++;
// }

// alert(`The number you entered has ${counting} symbols`)

// Task 5
// let positiveNumberCount = 0;
// let negativeNumberCount = 0;
// let zeroNumberCount = 0;
// let evenNumberCount = 0;
// let oddNumberCount = 0;

// for (i = 0; i < 10; i++) {
//     let currentNumber = +prompt('Please enter 10 numbers')
//     if (currentNumber > 0) {
//         positiveNumberCount++;
//     } else if (currentNumber <0) {
//         negativeNumberCount++;
//     } else {
//         zeroNumberCount++;
//     } 
//     if (currentNumber % 2 == 0) {
//         evenNumberCount++;
//     } else {
//         oddNumberCount++;
//     }
// }

// document.write(`You are entered: ${positiveNumberCount} positiv numbers, ${negativeNumberCount} negativ numbers,
// ${zeroNumberCount} zero numbers, ${evenNumberCount} even numbers, ${oddNumberCount} odd numbers`);

// Task 6
// do {
//     let firstNumber = +prompt('Enter the first number');
//     let sign = prompt('Choose a sign - + / *');
//     let secondNumber = +prompt('Enter the second number');
    
//         switch (sign) {
//             case '+':
//                 alert(firstNumber + secondNumber);
//                 break;
//             case '-':
//                 alert(firstNumber - secondNumber);
//                 break;
//             case '/':
//                 alert(firstNumber / secondNumber);
//                 break;
//             case '*':
//                 alert(firstNumber * secondNumber);
//             default:
//                 break;
//         }
// }
//  while (confirm('Want to solve another example?'));

// Task 7

// let number = prompt('Enter a number!');
// let shift = +prompt('Enter a shift number!');

// number = number.slice(shift, number.length) + number.slice(0, shift);

// alert(`The result of shift is: ${number}`);

// Task 8
// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let currentDay = 0;

// while (confirm(`${days[currentDay]}. Want to see the next day?`)) {
//     currentDay = (currentDay + 1) % days.length;
// }

// Task 9

// let x=prompt("Enter a number:",'');
// let alertBody = '';
// for (let i=1; i<10; i++) {
//   alertBody += x + "*" + i +"="+x*i + '\n';
// }
// // alert(alertBody);

// Task 10

let minValue = 0;
let maxValue = 100;
let N = maxValue / 2;
let isGame = true;

let is
do {
 let answer = prompt("Ваше число  ${N} ?, smaller/bigger/yes");

  switch (answer) {
    case 'smaller':
     maxValue = N - 1;   
     N = parseInt(minValue + ((maxValue - minValue) / 2));
     break;
    case 'bigger':
     minValue = N + 1;   
     N = parseInt(minValue + ((maxValue - minValue) / 2));
     break;
    default:
        isGame = false;           
  }
} while (isGame)

console.log('Your Number is: ${N}')
