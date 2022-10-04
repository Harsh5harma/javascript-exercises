const ftoc = function(temp) {
  let ftemp = (temp-32)*(5/9);
  return parseFloat(ftemp.toFixed(1));
};

const ctof = function(temp) {
  let ftemp = temp*(9/5)+32;
  return parseFloat(ftemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
