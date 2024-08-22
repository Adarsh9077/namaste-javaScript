console.log(x);
var x = 108;
getName();
getName3();
getName2();

function getName() {
  console.log((x + 9) * 2, " --> namaste-JavaScript Normal function");
}

var getName2 = () => {
  console.log(`${x} --> this is in arrow function and it is template literals`); //
  console.log(
    (x + 2) * 9 +
      " --> this is in arrow function and it is using conatination operator(+)"
  );
};
var getName3 = function () {
  console.log("this is variable type function");
};
console.log(typeof (2 + 3, 5 + 6));
// ###############################################################
/* **Hoisting in JavaScript** is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase. This allows functions to be called before they are defined, and variables to be referenced before they are declared.

Let’s break down the hoisting behavior for each type in your code:

1. **Function Declarations** (like `getName()`):
   - Function declarations are fully hoisted, meaning both the function's name and its definition are moved to the top of their scope.
   - You can call `getName()` before its definition in the code, and it will work perfectly because it's hoisted.

   ```javascript
   console.log(x); // undefined
   getName();      // Works, as function declarations are hoisted.

   function getName() {
       console.log(x+9*2," --> namaste-JavaScript Normal function");
   }
   ```

2. **Variable Declarations** (using `var`, `let`, or `const`):
   - **`var` Declarations**: These are hoisted but initialized with `undefined`. The declaration is moved to the top, but the assignment stays where it is.
   - In your code, `x` is declared at the top and initialized with `undefined` until it is assigned the value `108` later in the code.
   - Accessing `x` before its assignment will return `undefined`.

   ```javascript
   console.log(x); // undefined
   var x = 108;
   ```

   - **`let` and `const` Declarations**: These are also hoisted but are not initialized. Accessing them before initialization results in a `ReferenceError`.

3. **Function Expressions** (like `getName3()`):
   - Function expressions assigned to variables using `var` are hoisted like variables, meaning only the variable declaration is hoisted, not the function itself.
   - Before the assignment, the variable is `undefined`.

   ```javascript
   getName3();  // TypeError: getName3 is not a function
   var getName3 = function () {
       console.log("this is variable type function");
   };
   ```

   - Since `getName3` is declared using `var`, it is hoisted to the top but initialized with `undefined`. When you try to call `getName3()` before its assignment, it results in a `TypeError`.

4. **Arrow Functions** (like `getName2()`):
   - Arrow functions behave similarly to function expressions.
   - Only the declaration of `getName2` is hoisted, and it is initially `undefined`.

   ```javascript
   getName2();  // TypeError: getName2 is not a function
   var getName2 = () => {
       console.log(`${x} --> this is in arrow function and it is template literals`);
       console.log(
           (x + 2) * 9 +
           " --> this is in arrow function and it is using conatination operator(+)",
           "Ohhhh"
       );
   };
   ```

In summary:

- **Function Declarations**: Fully hoisted.
- **Variables with `var`**: Hoisted but initialized with `undefined`.
- **Function Expressions & Arrow Functions**: Hoisted as variables (initialized with `undefined`).
- **`let` and `const`**: Hoisted but not initialized; accessing them before initialization causes a `ReferenceError`.*/

/* ### Difference Between Concatenation Operator (`+`), Comma Operator (`,`), and Template Literals in JavaScript

1. **Concatenation Operator (`+`)**:
   - **Usage**: Combines strings or adds numbers.
   - **Example**:
     ```javascript
     let result = "Hello" + " " + "World"; // "Hello World"
     ```
   - **Behavior**: When used with strings, it concatenates them. If one operand is a string and the other is a number, the number is converted to a string.

2. **Comma Operator (`,`)**:
   - **Usage**: Used in expressions to evaluate multiple expressions in a sequence, but only returns the last value.
   - **Example**:
     ```javascript
     let x = (2 + 3, 5 + 6); // x = 11
     ```
   - **Behavior**: In `console.log`, it separates values to be printed with spaces, not concatenating them.

3. **Template Literals**:
   - **Usage**: Allows embedding variables and expressions inside strings using backticks (\`\`) and `${}`.
   - **Example**:
     ```javascript
     let x = 5;
     console.log(`${x} is the value of x`); // "5 is the value of x"
     ```
   - **Behavior**: They are more readable and versatile, especially for multi-line strings or embedding expressions.

### Application in Your Code

- **Concatenation Operator (`+`)**:
  ```javascript
  console.log((x + 2) * 9 + " --> this is in arrow function and it is using concatenation operator(+)");
  ```
  - This concatenates the result of `(x + 2) * 9` with the string.

- **Comma Operator (`,`)**:
  ```javascript
  console.log((x + 9) * 2, " --> namaste-JavaScript Normal function");
  ```
  - Here, `(x + 9) * 2` is evaluated first, and both results are printed with a space between them.

- **Template Literals**:
  ```javascript
  console.log(`${x} --> this is in arrow function and it is template literals`);
  ```
  - This directly embeds the value of `x` into the string.*/
