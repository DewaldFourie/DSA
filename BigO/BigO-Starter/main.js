

// --------------------------  O(n) -------------------------------------------------------------------------
const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100).fill('nemo');

function findNemo2(fish) {
    console.log('----------- Running O(n) example ------------');
    console.log('');
    
    for (let i = 0; i < fish.length; i++) {
        if (fish[i] === 'nemo') {
            console.log('Found NEMO!');
            break
        }
    }
}

findNemo2(fish);


// --------------------------  O(1) -------------------------------------------------------------------------
console.log('');
console.log('');

const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) { 
    console.log('----------- Running O(1) example ------------');
    console.log('');

    console.log(boxes[0]);
    console.log(boxes[1]);
}

logFirstTwoBoxes(boxes);


// --------------------------  O(n + m) -----------------------------------------------------------------------
console.log('');
console.log('');

function compressBoxesTwice(boxes, boxes2) {
    console.log('----------- Running O(1) example ------------');
    console.log('');

    boxes.forEach(function(boxes) {
        console.log(boxes);   
    })

    boxes2.forEach(function(boxes) {
        console.log(boxes);
        
    })
}

// NB ---> DIFFERENT INPUTS SHOULD HAVE DIFFERENT VARIABLES !!!! 

// O(a + b)     and if nested =>   O(a*b)

// --------------------------  O(n^2) -------------------------------------------------------------------------
console.log('');
console.log('');

const data = ['a','b','c','d','e']

function logAllPairsOfArray(array) {
    console.log('----------- Running O(n^2) example ------------');
    console.log('');

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
            
        }
    }
}

logAllPairsOfArray(data)