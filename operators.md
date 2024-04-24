# JavaScript Assignment Operators

In JavaScript, assignment operators are used to assign values to variables. They combine an assignment operation with another operation like addition, subtraction, multiplication, etc. Here are the main assignment operators along with examples:

## 1. `=`

The `=` operator is the simplest assignment operator. It assigns the value on the right to the variable on the left.

```javascript
let x = 5; // Assigns the value 5 to variable x
```

## 2. +=

The `+=` operator adds the value on the right to the variable on the left and assigns the result to the variable.

```javascript
let y = 10;
y += 3; // Equivalent to y = y + 3; => y is now 13
```

## 3. -=

The `-=` operator subtracts the value on the right from the variable on the left and assigns the result to the variable.

```javascript
let z = 7;
z -= 2; // Equivalent to z = z - 2; => z is now 5
```

## 4. \*=

The `*=` operator multiplies the variable on the left by the value on the right and assigns the result to the variable.

```javascript
let a = 4;
a *= 3; // Equivalent to a = a * 3; => a is now 12
```

## 5. /=

The `/=` operator divides the variable on the left by the value on the right and assigns the result to the variable.

```javascript
let b = 20;
b /= 5; // Equivalent to b = b / 5; => b is now 4
```

## 6. %=

The `%=` operator assigns the remainder of dividing the variable on the left by the value on the right to the variable.

```javascript
let c = 17;
c %= 5; // Equivalent to c = c % 5; => c is now 2
```

## 7. \*\*=

The `**=` operator raises the variable on the left to the power of the value on the right and assigns the result to the variable.

```javascript
let d = 2;
d **= 3; // Equivalent to d = d ** 3; => d is now 8
```

These assignment operators are commonly used in JavaScript to perform operations on variables and update their values in a concise manner.

# Increment and Decrement Operators in JavaScript

In JavaScript, the increment (`++`) and decrement (`--`) operators are used to increase or decrease the value of a variable by 1, respectively. They can be applied both as prefix and postfix operators, and their behavior differs slightly based on whether they are used before or after the variable.

### Increment Operator (`++`)

The increment operator (`++`) adds 1 to the value of a variable. Its behavior depends on whether it's used as a prefix or postfix operator:

## 1. Prefix Increment (`++variable`):

When used as a prefix (`++variable`), the increment happens before the variable is evaluated in the expression.

```javascript
let num = 5;
let result = ++num; // Increment num by 1 before using it in the expression
console.log(num); // Outputs: 6
console.log(result); // Outputs: 6
```

## 2. Postfix Increment (`variable++`):

When used as a postfix (`variable++`), the current value of the variable is used in the expression first, and then the variable is incremented by 1.

```javascript
let num = 5;
let result = num++; // Use num in the expression first, then increment num by 1
console.log(num); // Outputs: 6
console.log(result); // Outputs: 5
```

### Decrement Operator (`--`)

The decrement operator (`--`) subtracts 1 from the value of a variable. Like the increment operator, its behavior depends on whether it's used as a prefix or postfix operator:

## 1. Prefix Decrement (`--variable`):

When used as a prefix (`--variable`), the decrement happens before the variable is evaluated in the expression.

```javascript
let num = 10;
let result = --num; // Decrement num by 1 before using it in the expression
console.log(num); // Outputs: 9
console.log(result); // Outputs: 9
```

## 2. Postfix Decrement (`variable--`):

When used as a postfix (`variable--`), the current value of the variable is used in the expression first, and then the variable is decremented by 1.

```javascript
let num = 10;
let result = num--; // Use num in the expression first, then decrement num by 1
console.log(num); // Outputs: 9
console.log(result); // Outputs: 10
```

In summary, the increment (`++`) operator increases the value by 1, while the decrement (`--`) operator decreases the value by 1. Their behavior as prefix or postfix determines whether the operation happens before or after the variable is used in an expression.

You can read more about assignment operators [here](https://www.geeksforgeeks.org/javascript-assignment-operators/)
