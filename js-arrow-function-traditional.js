// Traditional anonymous function
function showDuncan(a) {
  console.log("Hi, I'm Duncan 🐾!");
  return a + 1;
}

// 1. Change the word function to const
const showDuncan(parameter) {
  console.log("Hi, I'm Duncan 🐾!")
  return parameter + 1;
}

// 2. Add "=" between the function name and argument
const showDuncan = (parameter) {
  console.log("Hi, I'm Duncan 🐾!")
  return parameter + 1;
}

// 3. Add the arrow sign between the argument and the opening curly brace 
const showDuncan = (parameter) => {console.log("Hi, I'm Duncan 🐾!")
return parameter + 1;
}