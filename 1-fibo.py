# FIBO-REC (n)
#    se n ≤ 1
#    então devolva n
#    senão a ← FIBO-REC (n − 1)
#          b ← FIBO-REC (n − 2)
#          devolva a + b


def fibo_rec(n):
    if n <= 1:
        return n
    else:
        return fibo_rec(n - 1) + fibo_rec(n - 2)
    

print(fibo_rec(4))
print(fibo_rec(8))
print(fibo_rec(16))
print(fibo_rec(32))


