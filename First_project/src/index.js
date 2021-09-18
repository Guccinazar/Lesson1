
// // Task 1
// const age = prompt('Please input your age');

// if (age >= 0 && age <= 12) {
//     document.write('You are a child');
// } else if (age > 12 && age <= 18) {
//     document.write('You are a teenager');
// } else if (age > 18 && age <= 60) {
//     document.write('You are a adult');
// } else if (age > 60) {
//     document.write('You are an old man');
// } else {
//     document.write('You entered wrong value');
// }

//Task 2
// const number = prompt('Enter the number from 0 to 9');
// switch (number) {
//     case (number = 0):
//         console.log('0 is )');
//         break;
//     case (number = 1):
//         console.log('1 is !');
//         break;
//     case (number = 2):
//         console.log('2 is @');
//         break;
//     case (number = 3):
//         console.log('3 is #');
//         break;
//     case (number = 4):
//         console.log('4 is $');
//         break;
//     case (number = 5):
//         console.log('5 is %');
//         break;
//     case (number = 6):
//         console.log('6 is ^');
//         break;
//     case (number = 7):
//         console.log('7 is &');
//         break;
//     case (number = 8):
//         console.log('8 is *');
//         break;
//     case (number = 9):
//         console.log('9 is (');
//         break;
// }

// ------------Task 3--------------
// let threeDigitNumber = prompt('Enter the number from 100 to 999', 0);
// threeDigitNumber = threeDigitNumber + '';
// if (threeDigitNumber[0] == threeDigitNumber[1] || threeDigitNumber[0] == threeDigitNumber[2] || threeDigitNumber[1] == threeDigitNumber[2])
// {
//     alert('TRUE');
// }
// else
//     alert('FALSE');

// ------------Task 4------------
//  let year = prompt('Enter any year', 0);
//  if (year%4 == 0 && year %100 !== 0)
//  {
//      alert('Leap year');
//  }
//  else
//      alert('Not Leap Year');

// ------------Task 5------------
// let fiveDigitNumber = prompt('Enter the number from 10000 to 99999', 0);
// fiveDigitNumber = fiveDigitNumber + '';
// if (fiveDigitNumber === fiveDigitNumber.split('').reverse().join(''))
//     alert('palindrome');
// else
//     alert('NOT palindrome');

// ------------NumberTask 6--------------
// let amount = prompt('Enter the amount of USD:', 0);
// let currency = prompt('EUR = 1, UAH = 2, AZN = 3', 0);
// switch(currency) {
//     case '1':
//         console.log(amount*0.83 + 'EUR');
//         break;
//     case '2':
//         console.log(amount*26.75 + 'UAH');
//         break;
//     case '3':
//         console.log(amount*1.7008 + 'AZN');
//         break;
// }

// ------------Task 7--------------
// let amountOfCash = prompt('Enter the value of purchase:');
// if (amountOfCash >=200 && amountOfCash < 300)
//     alert(amountOfCash/100*97 + '$ with 3% discount');
// else if (amountOfCash >=300 && amountOfCash < 500)
//     alert(amountOfCash/100*95 + '$ with 5% discount');
// else if (amountOfCash >=500)
//     alert(amountOfCash/100*93 + '$ with 7% discount');

// ------------Task 8--------------
// const circle = +prompt('Enter a circle perimeter');
// const square = +prompt('Enter a square perimetr');
// const circleDiametr = ((circle / (2 * Math.PI)) * 2);
// const squareSide = square / 4;
//  if (circleDiametr <= squareSide) {
//   console.log ('The circle will fit in a square');
//  } else if (circleDiametr => squareSide) {
//      console.log ('The circle is too large for this square');
//  }

// ------------Task 9--------------
// const capital = prompt('What is the capital of Great Britain? 1 - London 2 - New York 3 - Paris');
// const championsLeague = prompt('Which football team has won the Champions League the most? 1 - Real Madrid Club 2 - FC Bayern München 3 -  FC Barcelona');
// const country = prompt('What is the most populated country? 1 - the USA 2 - Japan 3 - China');
// let score = 0;
// if (capital === 1) {
//     score += 2;
// }
// if (championsLeague === 1) {
//     score += 2;
// }
// if (country === 3) {
//     score += 2;
// }
// document.write('Your score is' + score);

//-----------Task 10-------------
// let date = prompt('Enter the date : day-month-year ');
// date = date.split('-');
// let oldDate = new Date(date[2], date[1] - 1, date[0]);
// oldDate.setDate(oldDate.getDate() + 1);
// alert(oldDate);