const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(args) {
  let result = 0;
	for (i in args){
    result += args[i];
  }
  return result;
};

const multiply = function(args) {
  prod = 1;
	for (i in args){
    prod *= args[i];
  }
  return prod;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	prod = 1;
  for (i = a; i >= 1; i--){
    prod *= i;
  }
  return prod;
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
