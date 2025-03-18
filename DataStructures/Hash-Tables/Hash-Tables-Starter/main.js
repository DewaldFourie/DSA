//
//  HASH TABLES
//
// Let's look at an Object in Javascript

let user = {
    age: 54,
    name: "Kyle",
    magic: true,
    scream: function() {
        console.log('Ahhhh!!');
    }
}

console.log(user.age);  
// 54

user.spell = 'abra kadabra'
console.log(user);
// adds the spell to the object with key = 'spell' and value = 'abra kadabra'

user.scream()
// Ahhhh!!

// all this happens with O(1)

//-----------------------------------------------------------------------------------

// Look at Collision Resolution 
// Hash Tables can take O(n) then if there is two or more objects occupying the same memory space


// in ES 6  JAVASCRIPT we now have 

//    MAPS     

// const a = new Map()             => a map allows to save any data type as the key, objects will always stringify the key
//                                 => a map maintains ordered insertion, an object has no order, it is random

//    SETS 

// const b = new Set()             => Difference between a Set and a Map is that a Set only stores the keys, no values!
//                                 => on Average the has() method of a Set is faster than the array.prototype.includes() of an Array


// -------------------- Example of creating a Hash Table using a class ----------------------------------

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    } 

    set(key, value) {
        let address = this._hash(key);
        console.log(address);
        if (!this.data[address]) {  
            this.data[address] = []
        } 
        this.data[address].push([key, value])
        console.log(this.data);
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address]
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return console.log(currentBucket[i][1]);
                }
            }
        }
        return undefined
    }

    keys() {
        if (!this.data.length) {
            return undefined
        }
        let result = []
        // Loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
                // also loop through all potential collisions
                if (this.data.length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        result.push(this.data[i][j][0])
                    }
                } else {
                    result.push(this.data[i][0])
                }
            }
        }
        return console.log(result);
    }
}


const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 54)
myHashTable.set('oranges', 2)

myHashTable.get('grapes');
myHashTable.get('apples')

myHashTable.keys()
