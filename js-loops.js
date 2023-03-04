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

// Where data is an object containing an array of objects:
      for (let x = 0; x < data.length; x++) {
        console.log(data[x].expense);

// FOREACH LOOP

// More commonly used alongside arrays. Can execute a function for each item in an array.

// 1. Define an array within an object
//  e.g. let expenses = [{expense: "bills"; amount: "5"}, {expense: "health"; amount: "6"}, {}, {}]

// 2. Use that object to apply the forEach loop. Use teh dot notation to attach the forEachmethod
// expenses.forEach(functionToExecuteForEachItem)

object.forEach(functionToExecuteOnEachArrayItem);

let expenses = [{expense: "bills"; amount: "5"}, {expense: "health"; amount: "6"}, {}, {}];

expenses.forEach(showExpenses)

function showExpenses(item, index, arr) {
  arr[index = 'Hello ' + item];

}

// Example forEach loop
// 

        let dashboardElement = document.getElementById("dashboardResults");
        let dashboardHTML = `<div>`;
        data.forEach(function (expenseItem) {
          dashboardHTML = dashboardHTML + `<div>${expenseItem.amount}</div>`;
        });
        dashboardHTML = dashboardHTML + `</div>`;
        dashboardElement.innerHTML = dashboardHTML;
        console.log(dashboardHTML);