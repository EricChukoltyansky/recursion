let fibo = (num) => {
  if (num<2) return num;

//   if (num === 1) return 1;

  return fibo(num - 1) + fibo(num - 2);
};

console.log(fibo(4));
