def gcd(a:int,b:int)->int:
    a = abs(a)
    b = abs(b)
    if min(a,b)==0:
        return max(a,b)
    while b % a != 0:
        r = b % a 
        b = a
        a = r
    return a


def axby(ab:tuple[int])->tuple[int]:
    a, b = ab
    x0, y0, x1, y1 = 0, 1, 1, 0
    while a != 0:
        r = b % a
        q = b // a
        x2 = q*x1 + x0
        x0 = x1
        x1 = x2
        y2 = q*y1 + y0
        y0 = y1
        y1 = y2
        b = a
        a = r
    return x0,y0

def hall_multiplier(l:int,m:int)->int:
    if min(l,m)< 1:
        return 'Not defined'
    l0 = gcd(l,m)
    l1 = m//l0
    multiplier = 1
    while gcd(l0,l1)>1:
        g = gcd(l0,l1)
        l0*= g
        l1 = l1//g
        multiplier*=g
    return multiplier

## Prime factorization

def primefact(n:int)->dict:
    if n == 0:
        return {0:1}
    pf = {}
    if n < 0:
        n = abs(n)
        pf[-1]=1
    for p0 in [2,3]:
        if n % p0 == 0:
            pf[p0] = 0
            while n % p0 == 0:
                n = n//p0
                pf[p0]+=1
    e = -1
    p = 5
    while p*p <= n:
        if n % p == 0:
            pf[p] = 0
            while n % p == 0:
                n = n//p
                pf[p]+=1
        p+=3+e
        e*=-1
    if n>1:
        pf[n]=1
    return pf

def primeQ(n:int)->bool:
    pfn = primefact(n)
    return len(pfn)==1 and max(pfn.values())==1

def pf_to_int(pf:dict)->int:
    n = 1
    for p in pf:
        n*=(p**pf[p])
    return n

def pf_to_divisors(pf:dict)->list:
    divs = [1]
    for p in pf:
        divs = [d*(p**e) for d in divs for e in range(pf[p]+1)]
    divs.sort()
    return divs

def quad_gcd(a1:int,a2:int)->int:
    pf2 = primefact(a2)
    a2rt = pf_to_int({p:pf2[p]//2 for p in pf2})
    return gcd(a1,a2rt)


def ap_to_lm(ap:tuple[int])->tuple[int]:
    a, p = ap
    #min poly of frob is x^2 - ax + p
    #trace of frob - 1 is a-2 and norm is p+a+1
    t = a - 2
    n = p - a + 1
    m = quad_gcd(t,n)
    l = n//(m**2)
    if n!= l*(m**2):
        return 'Something went wrong'
    return (l,m)


## Generating prime lists for testing

def primesBetween(a:int,b:int)->list[int]:
    a = max(2,a)
    if b < a:
        return []
    elif b == 2:
        return [2]
    elif b == 3:
        if a == 2:
            return [2,3]
        else:
            return [3]
    m = b
    # The following code is going to compute the set of primes < m
    # First, we create a list that will keep track of the primes-
    # the set contains m+1 elements, and for integers k <= m,
    # cands[k] = 0 records the fact that k is composite.
    # To begin, every even element other than 2 is set to 0,
    # to record the fact that 2 is the only even prime.
    cands = [0,0,1]+[(i % 2) for i in range(3,m+1)]
    # Next, we record that multiples of 3 other than 3 are composite.
    # Note that 6 is already known to be composite, 
    # so we can start at 9.
    for i in range(9,m+1,3):
        cands[i] = 0
    # Now we start going through the list of candidates to find primes p,
    # and updating the list by recording that all multiples of the prime,
    # which lie between p^2 and m inclusive, are composite.
    # We can stop once p^2 > m, since all multiples of p^2 will exceed m.
    # We start at p = 5, and we will only check odd numbers
    # that are not multiples of 3.
    # To avoid the multiples of 3, we will jump ahead by either 2 or 4
    # at each step. The number e records whether we need to jump by 2 or 4
    # at each step.
    e = -1
    p = 5
    while p**2 <= m:
        # This assumes p is prime. This is the case when p = 5,
        # and will be the case at the end of the loop when p is redefined.
        # As mentioned above, we start by recording that all multiples of
        # p between p^2 and m are composite.
        for pm in range(p**2,m+1,p):
            cands[pm]=0
        # Now we look for the next prime.
        # We alternate adding 2 and 4 to p and then checking whether
        # p is prime by checking if cands[p] is 0 or not.
        p+=3+e
        e*=-1
        while cands[p] == 0:
            p+=3+e
            e*=-1
    # When the loop ends, cands[p] = 0 if and only if p is 0,
    # so we can obtain the set of primes:
    primes = [p for p in range(a,m+1) if cands[p] == 1]
    return primes

def valuation(a:int,p:int):
    n = 0
    while a % p == 0:
        a = a//p
        n+=1
    return n

def discfac(d):
    if d == 0:
        return (0,0)
    elif d % 4 > 1:
        return (d,1)
    m = 1
    s = d//abs(d)
    d*=s
    while d % 4 == 0:
        m*=2
        d = d//4
    while d % 9 == 0:
        m*=3
        d = d//9
    r = 5
    e = -1
    while r*r <= d:
        r2 = r*r
        while d % r2 == 0:
            d = d//r2
            m*=r
        r+=3+e
        e*=-1
    d*=s
    if d % 4 > 1:
        return d*4, m//2
    else:
        return d, m 
    
def quad_rec(a,p):
    if p == 2:
        if a % 2 == 0:
            return 0
        elif a % 8 == 1 or a % 8 == 7:
            return 1
        else:
            return - 1
    pwr = pow(a,p//2,p)
    return pwr - ((pwr+1)//p)*p

def twisted_phi(d:int,m:int)->int:
    if m < 0:
        return 0
    pfm = primefact(m)
    phim = 1
    for p in pfm:
        phim*=(p-quad_rec(d,p))*(p**(pfm[p]-1))
    if d == -3 and m > 1:
        return phim//3
    elif d == - 4 and m > 1:
        return phim//2
    else:
        return phim

## CRT

def crt_pair(am1:tuple[int],am2:tuple[int])->tuple[int]:
    a1,m1 = am1
    a2,m2 = am2
    if gcd(m1,m2)>1:
        return 'Check moduli'
    m12 = m1*m2
    a12 = (a1 + m1*((a2-a1)*pow(m1,-1,m2))) % m12
    if 2*a12 > m12:
        a12-=m12
    return (a12,m12)

## Polynomials and Rational Functions

def poly_eval_mod(coefs_lc_to_const:list[int],x:int,p:int,rev = False):
    if rev == True:
        coefs_lc_to_const = coefs_lc_to_const[::-1]
    evx = coefs_lc_to_const[0]%p
    for c in coefs_lc_to_const[1:]:
        evx = (evx*x+c)%p
    return evx


def rat_eval_mod(coefdic_lc_to_const:dict,x:int,p:int,rev = False):
    ev = 1
    for e in coefdic_lc_to_const:
        fac_coefs = coefdic_lc_to_const[e]
        fac_ev = poly_eval_mod(coefs_lc_to_const=fac_coefs,x=x,p=p,rev=rev)
        if e>= 0 or fac_ev %p != 0:
            ev = (ev*pow(fac_ev,e,p)) %p
        else:
            return 'Infinity'
    return ev

def trace_frob(fg:tuple[int,int],p:int)->int:
    f,g = fg
    return - sum([quad_rec(x**3+f*x+g,p) for x in range(p)])