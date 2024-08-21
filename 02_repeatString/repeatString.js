const repeatString = function(words, times) {
    let outpu = "";
    if (times < 0) {
        return "ERROR";
    } else {
    for (i = 0; i < times; i++) {
        outpu += words;
    }
    return outpu;
}
};

// Do not edit below this line
module.exports = repeatString;
