let address = {
    street: 'Boulevard avenue',
    city: 'Chicago',
    zipCode: '56310-570'
};

console.log(address);

function showAddress(address) {
    for(let key in address)
        console.log(key, address[key]);
}

showAddress(address);