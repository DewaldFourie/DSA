

// Linear Search (Brute force)

// go one by one looking through the list

// best case = O(1)
// worst case = O(n)

var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

console.log(beasts.indexOf('Godzilla')); // linear search

console.log(beasts.findIndex(item => item === 'Godzilla'));  // linear search

console.log(beasts.find(item => item === 'Godzilla')); // linear search

console.log(beasts.includes('Godzilla'));  // linear search

// worst case above is that we go through entire list = O(n)

// is there a better way ? what if List was sorted ??




