function power(num, power) {
  if (power === 1) return num;
  return (res *= power(num, power - 1));
}

console.log(power(2, 3));
