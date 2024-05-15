const isEven = function(num) {
    if (num%2 === 0){
        console.log(`No, this ${num} is not Even!`);
    } else {
        console.log(`Yes, this ${num} is Even!`);
    }
}

const isEvenArrow = (num) => {
    if (num%2 === 0){
        console.log(`No, this ${num} is not Even!`);
    } else {
        console.log(`Yes, this ${num} is Even!`);
    };
}

isEven(54);
isEvenArrow(33);
