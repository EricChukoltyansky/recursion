class Stack{
    constructor() 
     { 
         this.items = []; 
     } 
    
     push(element) 
    { 
     // push element into the items 
     this.items.push(element); 
     }
   
     pop() 
     { 
     if (this.items.length == 0) 
         return "Underflow"; 
     return this.items.pop(); 
     } 
   
     peek() 
     { 
         return this.items[this.items.length - 1]; 
     } 
   
     printStack() 
     { 
         var str = ""; 
         for (var i = 0; i < this.items.length; i++) 
             str += this.items[i] + " "; 
         return str; 
     } 
 
 }

function isBalanced(S) {
  let brackets = "[]{}()";
//   let stack = [];
  let stack = new Stack(bracketsIndex);


  for (let bracket of S) {
    let bracketsIndex = brackets.indexOf(bracket);

    if (bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1);
    } else {
      if (stack.pop() !== bracketsIndex) {
        return 0;
      }
    }
  }
  return stack.length === 0 ? 1 : 0;
}

console.log(isBalanced("()"));

console.log(isBalanced("()[]{}"));

console.log(isBalanced("([{}])"));

console.log(isBalanced("([])[{}]{(())}"));

console.log(isBalanced("("));

console.log(isBalanced("()]"));
