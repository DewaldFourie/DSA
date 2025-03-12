
// This function demonstrates how long it takes for a function to run
// depending on array size

// this function has a O(n) notation, or linear time

const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100).fill('nemo');

function findNemo2(fish) {
    console.log('Running O(n) example');
    console.log('');
    
    for (let i = 0; i < fish.length; i++) {
        if (fish[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}

findNemo2(fish);


// example 2 
console.log('');
console.log('');

const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) { 
    console.log('Running O(1) example');
    console.log('');

    console.log(boxes[0]);
    console.log(boxes[1]);
}

logFirstTwoBoxes(boxes);