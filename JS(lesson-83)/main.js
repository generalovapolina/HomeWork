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

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin != true)
    console.log(users[i])
}

