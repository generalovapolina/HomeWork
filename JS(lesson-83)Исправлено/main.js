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
    }
]

let count = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin != true) 
    count++;
}

console.log (count)


