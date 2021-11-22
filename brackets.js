function isBalanced(S) {
  let brackets = "[]{}()";
  let stack = [];

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
