"use strict"


// let printNum = (num) => {

//     for (let i=num; i>0; i--) {
//         console.log(i)
//     }
// }

// printNum(5)

// let printNumRec = (num) => {
//     if( num === 0 ) return;
//     console.log(num)
//     printNumRec(num-1);
    
// }

// printNumRec(5)

let printNumRecNoExit = (num) => {
    
    console.log(num)
    printNumRecNoExit(num-1);
    
}

printNumRecNoExit(5)