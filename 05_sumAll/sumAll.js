const sumAll = function(first, second) {

    let total = 0;
    if (first < 0 || second < 0 || first%1 !== 0 || second%1 !== 0 || typeof first !== 'number' || typeof second !== 'number') {
        return "ERROR";
    } else if (first < second) {
    for (i = first; i <= second; i++) {
        total += i;
    }} else if (second < first){
        for (i = second; i <= first; i++) {
            total += i;
        } 
    } 
    return total;
    }
;

// Do not edit below this line
module.exports = sumAll;
