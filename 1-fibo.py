def fibo_rec(n):
    if n <= 1:
        return n
    else:
        return fibo_rec(n - 1) + fibo_rec(n - 2)
    
#Testes para o primeiro fibonacci
print(fibo_rec(4))
print(fibo_rec(8))
print(fibo_rec(16))
print(fibo_rec(32))

def fibo(n):
    f = [0, 1]

    for i in range(2, n + 1):
        f.append(f[i - 1] + f[i - 2])

    return f[n]

#Testes para o segundo fibonacci
print(fibo(4))
print(fibo(8))
print(fibo(16))
print(fibo(32))

def MEMORIZA_FIBO(n):
    f = []
    i = 0
    while i <= n:
        f.append(-1)
        i += 1
    return LOOK_UP(f,n)

def LOOK_UP(f,n):
    if f[n] >= 0:
        return f[n]
    if n <= 1:
        f[n] = n
    else:
        f[n] = LOOK_UP(f,n-1) + LOOK_UP(f,n-2)
    return f[n]

#Testes para o terceiro fibonacci
lista = []
print(MEMORIZA_FIBO(4))
print(MEMORIZA_FIBO(8))
print(MEMORIZA_FIBO(16))
print(MEMORIZA_FIBO(32))
print(MEMORIZA_FIBO(128))
print(MEMORIZA_FIBO(1000))
print(MEMORIZA_FIBO(10000))


