const removeFromArray = function(array, ...args) {
    let arr = [...array];
    for(i in args) if (arr.indexOf(args[i]) >= 0) arr.splice(arr.indexOf(args[i]), 1);
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
