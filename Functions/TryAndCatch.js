const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    set fullName(value) {
        if(typeof value !== 'string')
            throw new Error('Value is not a string');

        const parts = value.splits(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try{
person.fullName = '';
}
catch(e){
    alert(e);
}

console.log(person);