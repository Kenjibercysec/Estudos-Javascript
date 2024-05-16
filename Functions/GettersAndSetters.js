const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.first.Name = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'John Smith';

console.log(person);