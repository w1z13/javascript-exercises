const fibonacci = function(a) {
    let current = 0;
    let next = 1;
    if (a >= 0){
        for (let i = 0; i < Number(a); i++){
            let temp = current + next;
            current = next;
            next = temp;
        }
    return current;
    }
    return 'OOPS';
};

// Do not edit below this line
module.exports = fibonacci;


/*
0 1     0th
1 1     1st
1 2     2nd
2 3     3rd
3 5     4th
5 8     5th
8 13    6th
*/




