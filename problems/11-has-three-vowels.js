/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {
    // Your code here
    let arr = string.split('')

    let eCount = 0
    let oCount = 0
    let uCount = 0
    let iCount = 0
    let aCount = 0
    arr.forEach(char => {
        if (char == 'o'){
            oCount = 1
        }
        else if (char == 'e'){
            eCount = 1
        }
        else if (char == 'u'){
            uCount = 1
        }
        else if (char == 'i'){
            iCount = 1
        }
        else if (char == 'a'){
            aCount = 1
        }
      });
      let totalC = aCount + oCount + eCount + uCount + iCount
   
      if (totalC >= 3){
        return true
      }
      return false
};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
