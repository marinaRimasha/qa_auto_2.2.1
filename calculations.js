function increaseBalance(x, y) {
  x = x + y;
  return x;
}

function decreaseBalance(x, y) {
  //had to add y as it was not defined here
  x = x - y;
  return x;
}

function divideBalanceByAccounts(x, y) {
  x = x / y;
  console.log("x");
  /**this was unreachable as stated after return ir you wanted to log x 
  if you wanted to log x value and not "x" string, you should not use ""
  */
  return x;
}

function getRestAfterDivision(x, y) {
  x = x % y;
  return x;
} //this one looks fine to me

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));
// third argument is not stated in the method
console.log(getRestAfterDivision(7000, 3));
