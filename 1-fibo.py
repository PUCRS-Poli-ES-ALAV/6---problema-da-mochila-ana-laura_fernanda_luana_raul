def fibo_rec(n):
    if n <= 1:
        return n
    else:
        return fibo_rec(n - 1) + fibo_rec(n - 2)
    

def MEMORIZA_FIBO(f,n):
    for i in range(0,n+1):
        f.append(-1)
    return LOOK_UP(f,n)

def LOOK_UP(f,n):
    if f[n] >= 0:
        return f[n]
    if n <= 1:
        f[n] = n
    else:
        f[n] = LOOK_UP(f,n-1) + LOOK_UP(f,n-2)
    return f[n]

print(fibo_rec(4))
print(fibo_rec(8))
print(fibo_rec(16))
print(fibo_rec(32))


#Testes para o terceiro fibonacci
print(MEMORIZA_FIBO([],4))
print(MEMORIZA_FIBO([],8))
print(MEMORIZA_FIBO([],16))
print(MEMORIZA_FIBO([],32))
print(MEMORIZA_FIBO([],128))
print(MEMORIZA_FIBO([],1000))
print(MEMORIZA_FIBO([],10000))


def fibo(n):
    f = [0, 1]

    for i in range(2, n + 1):
        f.append(f[i - 1] + f[i - 2])

    return f[n]

print(fibo(4))
print(fibo(8))
print(fibo(16))
print(fibo(32))
