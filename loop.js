// 1
// let printN = (n) => {
//   for (let i = 0; i < n; i++) {
//     console.log(i)
//   }
// };

// printN(10);

// 2

// version 1
// let countX = (n,t) => {
//   for (let i = 0; i<n; i++) {
//       if( i % t === 0) {
//           console.log(i)
//       }
//   }
// }

// console.log(countX(10,5))

// // version 2
// let countX = (n,t) => {
//     for(let i = 0; i<n; i+=t) {
//         console.log(i)
//     }
// }

// 3
// version 1

// let countEven = (n) => {
//   let count = 0;
//   n = n.toString().split("");
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] % 2 === 0) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countEven(1640));

// version 2

// function countDigits(n) {
//   let total = 0;
//   while (n) {
//     n % 2 === 0 ? total++ : total;
//     n = Math.floor(val / 10);
//   }
//   return total;
// }

// 4

// version 1
// let countEvenOnRange = (n) => {
//   let count = 0;

//   for (let i = 112; i <= n; i++) {
//     if ((i % 10) % 2 === 0) {
//       count++;
//     }
//     if ((i / 10) % 2 === 0) {
//       count++;
//     }
//     if ((i / 10 / 10) % 2 === 0) {
//       count++;
//     }

//     console.log(Math.floor(i / 10));
//   }
//   return count;
// };

// console.log(countEvenOnRange(120));

// 5
// let printReverse = () => {
//     for( let i = 100; i>=0; i-=2) {
//         console.log(i)
//     }
// }

// printReverse()

// 6
// let quad = (a,b,c) => {
//     {
//         let result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
//         let result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
//         return result + "<br>" + result2;
//     }
// }

// console.log(quad(3,8,2))

// 7
// countABC = (str) => {
//   let counts = {};

//   let char, count;

//   for (let i = 0; index < str.length; i++) {
//     char = str.charAt(i);

//     count = counts[char];

//     counts[char] = count ? count + 1 : 1;
//   }
// };

// 8
// function capitalize(word) {
//   let capitalizedWord="", char=0;
//   for (let i = 0; i < word.length; i++) {
//     let firstChar = word.charCodeAt(i);
//     if (firstChar >= 97 && firstChar <= 122) {
//       char = String.fromCharCode(firstChar - 32);

//     //   console.log(char);
//     }
//     capitalizedWord += char;
//   }
//   return capitalizedWord;
// }

// console.log(capitalize("mother"));

// 9 

function validateEmail(email) 
    {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }


