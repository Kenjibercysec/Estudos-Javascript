const number = [3, 4];

//end 
numbers.push(5, 6);

console.log(number);

//Beginning
numbers.unshift(1,2);

console.log(number);

//Middle
numbers.splice(2, 0, 'a', 'b');

console.log(number);