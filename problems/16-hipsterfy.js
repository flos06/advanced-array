/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {
    // Your code here
    let vowels = 'eaoiu'
    for (let i = word.length; i >= 0; i--){
        if (vowels.includes(word[i])){
            let newest = word.slice(0, i) + word.slice(i+1)
            return newest
        }

    }
};

let hipsterfy = function(sentence) {
    // Your code here
    let newArray =[]
    let sArray = sentence.split(' ')
    sArray.forEach(word => {
        let newWord = removeLastVowel(word)
        newArray.push(newWord)
    })
    newArray = newArray.join(' ')
    console.log(newArray)

    return newArray
};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
