const higherThanHundred = function (checkThis) {
    if (checkThis > 100) {
        return true;
    } else {
        return false;
    }
}

console.log(higherThanHundred(21));
console.log(higherThanHundred(121));

// the bouncer
const maxNumber = 100;
const minAge = 18;
const entranceCheck = function (currentNumber, currentAge, maxNumberInClub = maxNumber, minAgeInClub = minAge) {
    if (currentNumber >= maxNumberInClub) {
        return "it's too busy now, come back later";
    }
    if (currentAge < minAgeInClub) {
        return "this is a club for adults";
    }
    return "come in";
}

console.log(entranceCheck(35,17 ));
console.log(entranceCheck(35,18 ));
console.log(entranceCheck(99,19 ));
console.log(entranceCheck(100,19 ));
console.log(entranceCheck(101,19 ));
console.log(entranceCheck(101,16 ));

const calcAverage = function (number1, number2,number3,number4,number5) {
    result = (number1 + number2+number3+number4+number5)/5;
    return Math.round(result);
}

console.log(calcAverage(3,3,3,3,3));
console.log(calcAverage(103,3,3,3,3));
console.log(calcAverage(6,6,2,3,3));
console.log(calcAverage(4,3,3,3,3));
console.log(calcAverage(0,0,3,3,3));