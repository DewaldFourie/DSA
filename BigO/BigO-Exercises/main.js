// Exercise 1
// What is the Big O of the below function? (Hint, you may want to go line by line)

function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  function anotherFunction() {
    return null
  }

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  console.log(a);
}

funChallenge([1,2,3,4,5])

// ------- ANSWER -------
// O(n)  = O(3 + 3n)

// ----------------------------------------------------------------

// Exercise 2
// What is the Big O of the below function? (Hint, you may want to go line by line)

function anotherFunChallenge(input) {
  let a = 5; 
  let b = 10; 
  let c = 50; 
  for (let i = 0; i < input; i++) {
    let x = i + 1; 
    let y = i + 2; 
    let z = i + 3; 

  }
  for (let j = 0; j < input; j++) { 
    let p = j * 2; 
    let q = j * 2; 
  }
  let whoAmI = "I don't know"; 
}

// ------- ANSWER -------
// O(n)  = O(4 +  5n)