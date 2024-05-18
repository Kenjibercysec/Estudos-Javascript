function interest(principal, rat = 3.2, years = 5){
    return principal * rate / 100 * years;
}

console.log(interest(10000, undefined, 5));