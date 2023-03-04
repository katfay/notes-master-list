// LOOPS

// FOR LOOP

// Loop through each item in an array until you find one that matches the conditions you've set
// xx
// for (<expression1>; <expression2>; <expression3>) {}
// <expressoin1> = interpreted before code block (in {}) is executed
// <expression2> = this condition needs to be met, for the {} code block to be executed
// <expression3> = executed after each loops of the code block (if this condition is deemed true)
for (let x = 0; x < 5; x++) {}

// Example of a for loop
for (let x = 2; x < 5; x++) {
  console.log("We have " + x + " winners");
}
/* The above for loop console logs: 
We have 2 winners
We have 3 winners
We have 4 winners
*/
// Translation: set x as a variable with the value of 2; if x is less than 5, execute the code block in {}; after each execution (loop), increase the value of the variable x by 1; if the resulting value of x remains less than 5, execute the code again using the new variable value
