//1
function showMessage(name) {
    return 'Привет,' + name;
}

const result = showMessage('Аня')
console.log(result)


//2
const numbers = [20, 5, 7, 54, 32, 2, 8, 30, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19]

function checkForCopyItem(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]>10){
            console.log(array[i])
        }
    }
}
    console.log(checkForCopyItem(numbers))


//3
function calculator (firstnumber,secondnumber,action) {
    if (action == 'plus'){
        return (firstnumber + secondnumber)
    } else if (action == 'minus') {
        return (firstnumber - secondnumber)
    } else if (action == 'division') {
        return (firstnumber / secondnumber)
    } else if (action == 'multiplication') {
        return (firstnumber * secondnumber)
    }
}
console.log(calculator(5, 7, 'plus'))
console.log(calculator(5, 7, 'minus'))
console.log(calculator(5, 7, 'division'))
console.log(calculator(5, 7, 'multiplication'))