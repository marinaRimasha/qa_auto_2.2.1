function increaseBalance(x, y) {
  return (x += y);
}

function decreaseBalance(x, y) {
  return (x -= y);
}

function divideBalanceByAccounts(x, y) {
  console.log("x");
  return (x /= y);
}

function getRestAfterDivision(x, y) {
  return (x %= y);
}

function incrementBalance(x) {
  return (result = ++x);
}

function decrementBalance(x) {
  return (result = --x);
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));
console.log(getRestAfterDivision(7000, 3));
console.log(incrementBalance(10));
console.log(decrementBalance(10));

