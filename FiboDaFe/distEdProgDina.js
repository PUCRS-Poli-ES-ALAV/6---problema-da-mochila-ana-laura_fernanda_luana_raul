// m = tamanho(A);
// n = tamanho(B);
// matriz[0][0] = 0;
// Para i = 1 até m
//    matriz[i][0] = matriz[i-1][0] + 1  // soma uma I;
// Para j = 1 até n
//    matriz[0][j] = matriz[0][j-1] + 1  // Soma uma R;
// Para i = 1 até m
//    Para j = 1 até n
//       Se A[i] == B[j]
//      custoExtra = 0 //Operação M;
//       Senão
//      custoExtra = 1 //Operação S;
//       matriz[i][j] = Mínimo(matriz[i-1][j] +1, matriz[i][j-1] +1, 
//                 matriz[i-1][j-1] + custoExtra];
// devolva matriz[m][n];

function distEdProgDina(A, B) {
    let m = A.length;
    let n = B.length;
    for (let i = 1; i <= m; i++) {
        matriz[i][0] = matriz[i-1][0] + 1;
    }

    for (let j = 1; j <= n; j++) {
        matriz[0][j] = matriz[0][j-1] + 1;
    }

    for(let k = 1; k <= m; k++){
        for(let f = 1; f <= n; f++){
            if(A[k] == B[f]){
                custoExtra = 0;
            } else {
                custoExtra = 1;
            }
            matriz[k][f] = Math.min(matriz[k-1][f] + 1, matriz[k][f-1] + 1, matriz[k-1][f-1] + custoExtra);
        }
    }

    return matriz[m][n];
}