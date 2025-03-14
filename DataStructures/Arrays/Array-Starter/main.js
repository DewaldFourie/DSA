
const strings = ['a', 'b', 'c', 'd'];
// 4 * 4 = 16 bytes of storage

//------------------- access -------------

strings[2] = c
// O(1)

//------------------- push ---------------

strings.push('e') = ['a', 'b', 'c', 'd', 'e']
// O(1)

//------------------- pop ---------------

strings.pop() = ['a', 'b', 'c', 'd']
// O(1)

//------------------- unshift ---------------

strings.unshift('x') = ['x', 'a', 'b', 'c', 'd']
// O(n)

//------------------- splice ---------------

strings.splice(2, 0, 'alien') = ['x', 'a', 'alien', 'b', 'c', 'd']
// O(n)

//------------------- sort ---------------

strings.sort() = ['a', 'alien', 'b', 'c', 'd', 'x']
// O(n log(n))

//------------------- slice ---------------

let slicedStrings = strings.slice(0, 2); = ['a', 'alien']
// O(n)

//------------------- map (& filter) ---------------

let mapStrings = strings.map(val => val + 'map') = ['amap', 'alienmap', 'bmap', 'cmap', 'dmap', 'xmap']
// O(n)

