"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("res" + num);
}
printResult(add(5, 9));
var combinedValues;
combinedValues = add;
//also combinedValues:(a:number, b:number)=>number;
//combinedValues=5// wont workas not a func
console.log(combinedValues(8, 8));
