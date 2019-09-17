// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();
    //Answer:
        const myFunction =() => {
            console.log();
        };
        myFunction();

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
    //Answer:
        const anotherFunction = (param)=>{
            return `${param}`;
        };
        console.log(anotherFunction("Example"))

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
    //Answer:
        const add = (param1,param2) => {
            return `${param1 + param2}`;
        };
        console.log(add(1,2))

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
    //Answer:
        const subtract = (param1,param2) => {
            return `${param1 - param2}`;
        };
        console.log(subtract(1,2))

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
    //Answer:
        exampleArray = [1,2,3,4];
        const triple = exampleArray.map((num)=>{
            return num*3;
        })
        console.log(triple);
