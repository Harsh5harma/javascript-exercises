const fibonacci = function(n) {
    n = Number(n);
    if (n<0)
        return "OOPS";
    let a = 0;
    let b = 1;
    let c = a+b;
    for (let i =0;i<n-2;++i){
        a=b;
        b=c;
        c=a+b;
    }
    return c;

};

// Do not edit below this line
module.exports = fibonacci;
