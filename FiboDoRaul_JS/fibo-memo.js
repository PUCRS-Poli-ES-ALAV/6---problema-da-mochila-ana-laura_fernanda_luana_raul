// MEMOIZED-FIBO (f, n)
//  para i ← 0 até n faça
//       f [i] ← −1
//  devolva LOOKUP-FIBO (f, n)

let f = [];

function fib(f, n) {
  for (let i = 0; i <= n; i++) {
    f[i] = -1;
  }
  return lookupFibo(f, n);
}

// LOOKUP-FIBO (f, n)
//  se f [n] ≥ 0
//      então devolva f [n]
//  se n ≤ 1
//  então f [n] ← n
//  senão f [n] ← LOOKUP-FIBO(f, n − 1) + LOOKUP-FIBO(f, n − 2)
//  devolva f [n]

function lookupFibo(f, n) {
  if (f[n] >= 0) {
    return f[n];
  }
  if (n <= 1) {
    f[n] = n;
  } else {
    f[n] = lookupFibo(f, n - 1) + lookupFibo(f, n - 2);
  }
  return f[n];
}

// console.log(fib(f, 4));  // Funciona
// console.log(fib(f, 8));  // Funciona
// console.log(fib(f, 12)); // Funciona
// console.log(fib(f, 32)); // Funciona
console.log(fib(f, 1111));  // Funciona
// console.log(fib(f, 5000));   // Infinito
// console.log(fib(f, 128000)); // Estoura pilha
