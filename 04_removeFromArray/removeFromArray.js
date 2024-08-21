const removeFromArray = function(full, ...args) {
    let newArray = [];

    full.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    })

    return newArray;
    
    


};

// Do not edit below this line
module.exports = removeFromArray;
