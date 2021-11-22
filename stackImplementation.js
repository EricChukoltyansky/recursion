class Stack {
  // array is used to implement stack
  constructor() {
    this.data = [];
    this.top = 0;
  }
}
// push function - this method adds an element at the top of the stack
push(element);
{
  // push element into the items
  this.data[this.top] = element;
  this.top = this.top + 1;
}

// pop function - this method returns the topmost element of stack and removes it. Return underflow when called on an empty stack.
pop(element);
{
  if (this.isEmpty() === false) {
    this.top = this.top - 1;
    this.item.slice(1,-1);
  }
}

// peek function - Return the topmost element without removing it from the stack.
peek(element);
{
  this.item[this.item.length - 1];
}

// isEmpty - If the value of the top is equal to 0 then there is no element in the Stack

isEmpty() {
    this.top === 0; //return
};

// length  - to get the length of the stack, we can return the top value.

length() {
  this.top //return
}
