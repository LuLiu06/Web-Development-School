// Regular function
function sayHello() {
    return "Hello, world!";
};
//arrow function
const sayHelloArrow = () => "Hello, world!";

// Regular function
function double(x) {
    return x * 2;
};
//arrow function
const doubleArrow=x=>x*2;

// Regular function
const person = {
    name: "Alice",
    sayHi: function() {
        return "Hi, " + this.name + "!";
    }
};
//arrow function
const personArrow={
    name:"Alice",
    sayHi:()=>"Hi, " + this.name + "!"
};

//callback function
const numbers1 = [1, 2, 3, 4, 5];

const doubled1 = [];
numbers1.forEach(function(num) {
  doubled1.push(num * 2);
});
//arrow function
const numbers2 = [1, 2, 3, 4, 5];

const doubled2 = [];
numbers2.forEach(num=>doubled2.push(num*2))