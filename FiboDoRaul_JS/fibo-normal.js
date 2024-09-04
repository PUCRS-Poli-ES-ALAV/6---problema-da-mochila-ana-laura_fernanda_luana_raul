// FIBO (n)
//      f [0] ← 0 
//  f [1] ← 1
//  para i ← 2 até n faça
//         f[i] ← f[i-1]+f[i-2]
//  devolva f [n]

function fib(n) {
    let f = [];
    f[0] = 0;
    f[1] = 1;
    for (let i = 2; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }
    return f[n];
    }

console.log(fib(4));  // Funciona
console.log(fib(8));  // Funciona
console.log(fib(12)); // Funciona
console.log(fib(32)); // Funciona
console.log(fib(1111));  // Funciona
console.log(fib(5000));   // Infinito
console.log(fib(128000)); // Infinito
