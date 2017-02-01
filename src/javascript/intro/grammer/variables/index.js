// # Variables

// > What are variables used for? Why are they important?

// ## Requirements

// 1. Create the following variables:
//     ```js
//     export var message = 'hello';

//     export let greeting = 'Yo!';

//     export const saying = 'What up';
//     ```
// 2. Can you assign a new value to message? (Assign 'world')
// 3. Can you assign a new value to greeting? (Assign 'Hello!')
// 4. Can you assign a new value to const? (Assign 'Booyah')


// ## Observations

// 1. What it he difference between var and let?
// 2. What is the difference between let and const?
// 3. When should you use let versus const?





// What are variables used for? Why are they important?
//     Variables are used for the storing of data. They are important because they allow for the storage of data values in code.


 var johnMessage = "Hello, my name is John!";

 let johnGreeting = "I am taking the Helio Training development course!";

 const johnSaying = "I am looking for an engineering job!";


// Can you assign a new value to message? (Assign 'world')
//     export var johnMessage = "World";
// Can you assign a new value to greeting? (Assign 'Hello!')
//     export let johnMessage = "Hello!";
// Can you assign a new value to const? (Assign 'Booyah')
//     export const johnSaying = "Booyah";


// 1. What it he difference between var and let?
//     let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.
// 2. What is the difference between let and const?
//     const variables cannot be changed; they are immutable,  whereas let is scoped locally to a function, block, etc.
// 3. When should you use let versus const?
//     A user should use const when needing to declare a variable that the user knows will not change whereas let is used locally and can be updated.