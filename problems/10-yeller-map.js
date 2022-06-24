/*
Write a function `yeller(words)` that takes in an array of words.
The function should return a new array where each element of the original array
is yelled.

Solve this using Array's `map()` method.

Examples:

console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]

*/

let yeller = function(words) {
  // Your code here

  let newest = words.map((caps) => {
    let newC = caps
    newC = newC.toUpperCase() + '!'
    console.log(newC)
    return newC
  })
  return newest

};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = yeller;
} catch (e) {
  module.exports = null;
}
