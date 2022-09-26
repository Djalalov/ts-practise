"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basics_1 = require("./basics");
var point = new basics_1.Point6(45, 55);
var x2 = point.getX();
console.log(x2);
var point2 = new basics_1.Point7(55, 35);
var z = point2.Z;
console.log(z);
///////////////////////////////////////////////
var userInput;
var userName;
userInput = 5;
userInput = "djkalhdkj"; //Although we can assign string here
//userName = userInput; // here we can not assign type string
console.log(userInput); // unknown = TS doesnt care but its differnt from ANY
if (typeof userInput === "string") {
    userName = userInput; //we need this extra check to assign UNKNOWN type to fixed STRING type
}
var userInput1;
var userName1;
userInput1 = 5;
userInput1 = "djkaldjkalhdkj"; //
userName1 = userInput1; //  Because its type ANY we can assign any type
console.log(userInput1); // unknown = TS doesnt care but its differnt from ANY
//NEVER function type, it is also VOID
function generateError(message, code) {
    throw { message: message, errorCode: code }; //Since this destroys the code
    //while (true) {} // can be also never type
}
generateError("An Error occured", 500);
/* const result = generateError("An Error occured", 500); // this line NEVER excutes
console.log(result); */
