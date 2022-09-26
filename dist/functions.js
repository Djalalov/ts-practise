"use strict";
//Return types
function add(n1, n2) {
    return n1 + n2;
}
//Function is now void but can be undefined meaning that
//there is return without value
/* function printResult1(num: number): undefined {
    console.log("Result: " + num);
    return;
}
printResult1(add(5, 12));
 */
//Void return type because there is no 'return'
function printResult2(num) {
    console.log("Result: " + num);
}
printResult2(add(5, 12));
//Function type
var combineValues; // Normal assigning
var combineValues1; // make it returns number
var combineValues2; // we can assign parameters as well
combineValues = add;
//combineValues2 = printResult2; // its not possible beacuse arguments do not match!
console.log(combineValues(5, 20));
//combining different parameters
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 10, function (result) {
    console.log(result);
});
