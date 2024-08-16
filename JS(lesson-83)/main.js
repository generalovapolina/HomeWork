// 1
const user = {
    name: 'Polina',
    lastName:'Generalova',   
    age: 24,
    streetAddress:'Russia,Krasnodarskiy kray,Novorossiysk' 
};
console.log(user)


// 2
const person = {
    name: 'Inna',
};
person.sayHello = function() {
    return `Hello, ${this.name}!`;
};

console.log(person.sayHello());





// 3
const users = [
    {
        name: 'Anna',
        age: 26,
        isAdmin: false
    },
    {
        name: 'Ivan',
        age: 34,
        isAdmin: true
    },
    {
        name: 'Polina',
        age: 23,
        isAdmin: false
    },

]

let count = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin != true)
        count++;
}

console.log(count)


