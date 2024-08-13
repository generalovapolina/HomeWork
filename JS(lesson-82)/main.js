function showMessage(name) {
    return 'Привет,' + name;
}

const result = showMessage('Аня')
console.log(result)


// =================================================

const someArray = [20, 5, 7, 54, 32, 2, 8, 30, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19]

function checkForCopyItem(array,item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= 10 == item) {
            return 'Все ок' + item;      
        }
    }
    return 'Это число меньше 10'
}

console.log(checkForCopyItem(someArray,10))

