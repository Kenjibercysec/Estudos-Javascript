
const numbers = arrayFromRange(1, 6);

console.log(numbers);

function arrayFromRange(min, max) {
    const result = [];
    for (let i = min; i <= max; i++){
        result.push(i);
    }
    return result;
}