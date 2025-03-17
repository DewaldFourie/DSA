// Create a function that reverses a string
// 'Hi My name is Andrei' => should be => 'ierdnA si enam yM iH'

function reverse(str) {

    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'error on input'
    }
    let tempArr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        tempArr.push(str[i])
    }
    return console.log(tempArr.join(''));
    
}

reverse('Hi My name is Andrei')

//--------------------- OR ------------------------------


function reverse2(str) {
    return console.log(str.split('').reverse().join(''));
}

reverse2('Hi My name is Andrei')