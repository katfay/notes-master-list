// Traditional function
function (a) {
  return a + 100;
}

// 1. Remove the word function
(a) {
  return a + 100;
}

// 2. Put an arrow between argument and opening curly braces
(a) => {
  return a + 100;
}

// 3. If single simple parameter, remove the curly braces
(a) => return a + 100;

// 4. If single, simple parameter, remove the word return (it's implied)
(a) => a + 100;