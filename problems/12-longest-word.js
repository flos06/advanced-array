/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/
let word = ''
let length = 0

let longestWord = function(sentence) {
    // Your code here
    if (sentence == ''){
        return sentence
    }
    let arr = sentence.split(' ')
    arr.forEach(key => {

        if (key.length > length) {
            length = key.length
            word = key
        }

    })

    
    console.log(word)
    return word
};
console.log(longestWord('')); // ''
// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
