// 1. cube
const cube = function(x) {
    return x * x * x;
  };
  
  // 2. fullName
  const fullName = function(first, last) {
    return first + " " + last;
  };
  
  // 3. power 
  const power = function(base, exp) {
    if (exp === 0) {
      return 1;
    }
    return base * power(base, exp - 1);
  };
  
  // 4. sumCubes
  const sumCubes = function(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total = total + cube(numbers[i]);
    }
    return total;
  };
  

//Step 2: Mechanics of Hoisting
//1
//var declarations are hoisted to the top of their scope, but the initialization is not hoisted.
//2
//let and const are also hoisted, but they stay in the temporal dead zone from the start of the block until their initialization line.
//3
//The identifier showMessage is hoisted, but since it is declared with const, it is in the TDZ until the assignment line.
//At the moment console.log(showMessage()); runs, showMessage is still uninitialized.
//This causes a ReferenceError: Cannot access 'showMessage' before initialization.
//4
//Function declarations are fully hoisted—both the name and the function body.So when the code runs, JavaScript already knows the complete definition of showMessage.



//tep 3: Code Restructuring
//1
let values = [10, 20, 30];

for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}

//2
let lastLogin = '1/1/1970';

function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`;
}

console.log(welcome('Charlie', 'Munger'));
