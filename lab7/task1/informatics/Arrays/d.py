n = int(input())
sum=0
a = list(map(int, input().split()))
for i in range(1, len(a)):
    if a[i] > a[i-1]:
        sum+=1
print(sum)