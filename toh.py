def TowerOfHanoi(n , source, destination, auxiliary):
    if n==1:
        print ("Move disk 1 from peg",source,"to peg",destination)
        if source == 'A':
            A.remove(1)
        elif source == 'B':
            B.remove(1)
        else:
            C.remove(1)
        if destination == 'A':
            A.append(1)
        elif destination == 'B':
            B.append(1)
        else:
            C.append(1)
        print("A:", *A)
        print("B:", *B)
        print("C:", *C)
        return
    TowerOfHanoi(n-1, source, auxiliary, destination)
    print ("Move disk",n,"from peg",source,"to peg",destination)
    if source == 'A':
        A.remove(n)
    elif source == 'B':
        B.remove(n)
    else:
        C.remove(n)
    if destination == 'A':
        A.append(n)
    elif destination == 'B':
        B.append(n)
    else:
        C.append(n)
    print("A:", *A)
    print("B:", *B)
    print("C:", *C)
    TowerOfHanoi(n-1, auxiliary, destination, source)

n = int(input('Enter number of disks : '))
A = [i for i in range(n, 0, -1)]
B = []
C = []
print("A:", *A)
print("B:", *B)
print("C:", *C)
TowerOfHanoi(n,'A','C','B')
print('Goal Reached !')
