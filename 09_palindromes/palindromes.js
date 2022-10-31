const palindromes = function (input) {
    strArray = input.toLowerCase().replaceAll(/\W/g,'').split('');
    revArray = [...strArray].reverse();
    if (strArray.toString() === revArray.toString()) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
