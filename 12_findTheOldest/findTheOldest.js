const findTheOldest = function(input) {
    temp = input.map((obj) => {
        if(obj.yearOfDeath != undefined){
            return obj;
        } else {
            obj.yearOfDeath = new Date().getFullYear();
            return obj;
        }
    }).sort((obj1, obj2) => {
        return obj1.yearOfDeath - obj1.yearOfBirth < obj2.yearOfDeath - obj2.yearOfBirth ? 1 : -1;
    });
    return temp[0];
};

// Do not edit below this line
module.exports = findTheOldest;
