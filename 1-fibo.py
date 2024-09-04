def fibo_rec(n):
    if n <= 1:
        return n
    else:
        return fibo_rec(n - 1) + fibo_rec(n - 2)
    

print(fibo_rec(4))
print(fibo_rec(8))
print(fibo_rec(16))
print(fibo_rec(32))


def fibo(n):
    f = [0, 1]

    for i in range(2, n + 1):
        f.append(f[i - 1] + f[i - 2])

    return f[n]

print(fibo(4))
print(fibo(8))
print(fibo(16))
print(fibo(32))
