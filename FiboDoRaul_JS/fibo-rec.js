function fib(n) {
  if (n <= 1) {
    return n;
  }
  a = fib(n - 1);
  b = fib(n - 2);
  return a + b;
}

console.log(fib(4));  // Funciona
console.log(fib(8));  // Funciona
console.log(fib(12)); // Funciona
console.log(fib(32)); // Funciona
// console.log(fib(1111));  // Nao Funciona
// console.log(fib(5000));   // NA
// console.log(fib(128000)); // NA