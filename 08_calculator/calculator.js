const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(addTT) {
      let sum = 0;
      for (let i =0;i<addTT.length;++i)
        sum+=addTT[i];
      return sum;
};

const multiply = function(mulTT) {
    let prod=1;
    for (let i = 0;i<mulTT.length;++i)
      prod*=mulTT[i];
    return prod;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
	let fact=1;
  for (let i = 1;i<=n;++i)
    fact*=i;
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
