from numbertheory import gcd, hall_multiplier,axby,discfac


def red_bf(abc:tuple)->bool:
    a,b,c = abc
    if abs(b)< a and a < c:
        return True
    elif b == a and a < c:
        return True
    elif c == a and b >= 0 and b <= a:
        return True
    return False

# Input: a discriminant d
# Output: The list of reduced binary quadratic forms with discriminant d

def get_cl_reps(d:int)->list:
    reps_found = []
    # First we check that d is indeed a discriminant;
    # if it isn't, we simply return an empty list because there are no associated lattices
    if d % 4 > 1 or d >= 0:
        return reps_found
    b = d % 4
    while 3*b *b <= abs(d):
        num = (b*b-d)//4
        a = b
        while a *a <= num:
            if a == 0:
                a+=1
            if num % a == 0:
                c = num//a
                if red_bf((a,b,c)):
                    reps_found.append((a,b,c))
                if b!= 0 and red_bf((a,-b,c)):
                    reps_found.append((a,-b,c))
            a+=1
        b+=2
    return reps_found

def get_cl_reps_filtered(d:int)->dict:
    reps = get_cl_reps(d)
    ds = {}
    for abc in reps:
        a,b,c = abc
        g = gcd(a,gcd(b,c))
        a,b,c = a//g,b//g,c//g
        ds[(a,b,c)]=d//(g*g)
    grps = {ds[abc]:[] for abc in ds}
    for abc in ds:
        grps[ds[abc]].append(abc)
    return grps


#############
## Kernels ##
#############
def beta_mat(abc:tuple[int],xy:tuple[int])->list[list[int]]:
    a,b,c = abc
    x,y = xy
    return [[y-b*x,a*x],[-c*x,y]]

def kernel_gen_cyc(mat:list[list[int]])->dict:
    m00 = mat[0][0]
    m01 = mat[0][1]
    m10 = mat[1][0]
    m11 = mat[1][1]
    l = m00*m11 - m01*m10
    l0 = gcd(gcd(m00,l),gcd(m01,l))
    l1 = gcd(gcd(m10,l),gcd(m11,l))
    if gcd(l0,l1)>1:
        return 'Check gcds'
    n0 = hall_multiplier(l0,l)
    # Multiplying u by n0 gives us a point that generates a subgroup
    # of index l0c; the order of the point is l/l0c
    l0c = n0*l0
    # We need a point of order l0c, and index l/l0c
    # We already have a point of order l/l1
    n1 = l//(l0c*l1)
    # v already has order l/l1
    # (l/l1) *v = 0, so (l/l1)/(l0c) will have order l0c
    xg = -(n0*m01+n1*m11)%l
    yg = (n0*m00+n1*m10)%l
    # Note that gcd(xg,yg, l) should now be equal to 1.
    # If gcd(xg,yg) is not 1, we can factor it out
    gxy = gcd(xg,yg)
    if gcd(gxy,l)!= 1:
        return 'Something went wrong'
    if gxy == 0:
        return 'Something wrong'
    return {(xg//gxy,yg//gxy):l}


def divide_cyclic_gen(gen:dict,m:int)->dict:
    v = [v for v in gen][0]
    l = gen[v]
    x,y = v
    if gcd(x,y)>1:
        g =gcd(x,y)
        if gcd(g,l)>1:
            return'The generator has the wrong order'
        x = x//g
        y = y//g
        v = (x,y)
    r,s = axby(v)
    w = (-l*s %(l*m),l*r%(l*m))
    return {v:m*l,w:m}

## Frobenius


class Matrix2x2:
    def __init__(self, data):
        if not isinstance(data, (list, tuple)) or len(data) != 2:
            raise ValueError("Input must be a 2x2 structure (list of lists or tuple of tuples)")
        for row in data:
            if not isinstance(row, (list, tuple)) or len(row) != 2:
                raise ValueError("Each row must have 2 elements")
            for element in row:
                if not isinstance(element, int):
                    raise TypeError("All elements must be integers")
        self.data = [list(row) for row in data]  # Store as a list of lists

    def __str__(self):
        return f"[{self.data[0][0]}, {self.data[0][1]}]\n[{self.data[1][0]}, {self.data[1][1]}]"

    def __add__(self, other):
        if not isinstance(other, Matrix2x2):
            raise TypeError("Can only add with another Matrix2x2 object")
        result = [[0, 0], [0, 0]]
        for i in range(2):
            for j in range(2):
                result[i][j] = self.data[i][j] + other.data[i][j]
        return Matrix2x2(result)

    def __sub__(self, other):
        if not isinstance(other, Matrix2x2):
            raise TypeError("Can only subtract with another Matrix2x2 object")
        result = [[0, 0], [0, 0]]
        for i in range(2):
            for j in range(2):
                result[i][j] = self.data[i][j] - other.data[i][j]
        return Matrix2x2(result)

    def __mul__(self, other):
        if not isinstance(other, Matrix2x2):
            raise TypeError("Can only multiply with another Matrix2x2 object")
        result = [[0, 0], [0, 0]]
        for i in range(2):
            for j in range(2):
                for k in range(2):
                    result[i][j] += self.data[i][k] * other.data[k][j]
        return Matrix2x2(result)
    
    def mvec(self,v):
        data = self.data
        a,b,c,d = data[0][0],data[0][1],data[1][0],data[1][1]
        x,y = v[0],v[1]
        return [a*x+b*y,c*x+d*y]
    
    def det(self):
        mat = self.data
        return mat[0][0]*mat[1][1]-mat[0][1]*mat[1][0]
    
    def inv(self):
        mat = self.data
        a,b,c,d = mat[0][0],mat[0][1],mat[1][0],mat[1][1]
        det = a*d-b*c
        if det**2 != 1:
            raise ValueError('Determinant must be +/- 1 to invert.')
        return Matrix2x2([[det*d,-det*b],[-det*c,det*a]])

    def gcdfac(self):
        data = self.data
        a,b,c,d = data[0][0],data[0][1],data[1][0],data[1][1]
        g = gcd(gcd(a,b),gcd(c,d))
        if g == 0:
            return self, 0
        else:
            return Matrix2x2([[a//g,b//g],[c//g,d//g]]),g

    def __pow__(self, power):
        if not isinstance(power, int):
            raise ValueError("Power must be an integer")
        if power < 0:
            power = -power
            base = self.inv()
        else:
            base = self
        result =  Matrix2x2([[1, 0], [0, 1]])  # Identity matrix
        while power > 0:
            if power % 2 == 1:
                result *=base
            power = power//2
            base *=base
        return result

    def __eq__(self, other):
        if not isinstance(other, Matrix2x2):
            return False
        return self.data == other.data

## Generators of fixed points

def frobmat(ap:tuple[int],abc:tuple[int]):
    t,p = ap
    a,b,c = abc
    g = gcd(gcd(a,b),c)
    a,b,c = a//g,b//g,c//g
    df,mf = discfac(t*t-4*p)
    dt,mt = discfac(b*b-4*a*c)
    if dt!= df or mf % mt != 0:
        return 'Check disc'
    mft = mf // mt
    trdiff = t+b*mft
    if trdiff%2 != 0:
        return 'Check trace'
    t0 = trdiff//2
    return Matrix2x2([[t0,-a*c*mft],[mft,t0-b*mft]])



def mw_gens(ap:tuple[int],abc:tuple[int],n:int)->dict:
    fmat = frobmat(ap,abc)
    cmat,m = (fmat**n - (fmat**0)).gcdfac()
    if abs(cmat.det()) == 1:
        return {(1,0):m,(0,1):m}
    elif m == 1:
        return kernel_gen_cyc(cmat.data)
    else:
        return divide_cyclic_gen(kernel_gen_cyc(cmat.data),m)


### Testing

def mwgens_test(ap:tuple[int],abc:tuple[int],n:int):
    fmat = frobmat(ap,abc)**n
    gens = mw_gens(ap,abc,n)
    results = {}
    for v in gens:
        fv = fmat.mvec(v)
        nv = gens[v]
        results[v] = ((fv[0]-v[0])%nv,(fv[1]-v[1])%n)
    return results
