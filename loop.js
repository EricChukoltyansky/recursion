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
let countEvenOnRange = (n) => {
  
  let count = 0;
  for( let i = 111; i<n ; i++) {
     console.log(i)
     }
     return count;
  }
  


console.log(countEvenOnRange(150))