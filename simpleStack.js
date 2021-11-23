class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    // push element into the items
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0) return "Underflow";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  printStack() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}



function pushNum() {
 const stack = new Stack();
 stack.push(3);
 stack.push(4);
 stack.push(5);
 stack.push(6);
 stack.push(7);
 stack.pop()
 stack.pop()
 stack.pop()
 stack.pop()
 console.log(stack.printStack());
}

pushNum();
