

let reverseRec = (str) => {
  if (str === "") {
    return "";
  } else {
    reverseRec(str.slice(1,0)) +str.charAt(0)
  }
};

console.log(reverseRec("hello"));

// function reverseString(str) {
//     if (str === "")
//       return "";
//     else
//       return reverseString(str.substr(1)) + str.charAt(0);
//   }
//   console.log(reverseString("hello"));

// function reverseStringMethod(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseStringMethod("hello"));

// function reverseStringLoop(str) {
//     let newArray = '';
//     for(let i=str.length-1; i>=0; i--) {
//         newArray +=str[i];
//     }
//     return newArray;
// }

// console.log(reverseStringLoop(s))
