const reverseString = function(words) {
   /* let output = '';
    for (i = words.length; i >= 0; i--) {
        output += words[i];
    }
    return output; */

    return words.split("").reverse().join("");

};

// Do not edit below this line
module.exports = reverseString;
