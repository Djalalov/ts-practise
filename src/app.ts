import { Point6, Point7 } from "./basics";

let point = new Point6(45, 55);
let x2 = point.getX();
console.log(x2);

let point2 = new Point7(55, 35);
let z = point2.Z;
console.log(z);
///////////////////////////////////////////////
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "djkalhdkj"; //Although we can assign string here
//userName = userInput; // here we can not assign type string
console.log(userInput); // unknown = TS doesnt care but its differnt from ANY
if (typeof userInput === "string") {
	userName = userInput; //we need this extra check to assign UNKNOWN type to fixed STRING type
}

let userInput1: any;
let userName1: string;
userInput1 = 5;
userInput1 = "djkaldjkalhdkj"; //
userName1 = userInput1; //  Because its type ANY we can assign any type
console.log(userInput1); // unknown = TS doesnt care but its differnt from ANY

//NEVER function type, it is also VOID

function generateError(message: string, code: number): never {
	throw { message: message, errorCode: code }; //Since this destroys the code
	//while (true) {} // can be also never type
}
generateError("An Error occured", 500);

/* const result = generateError("An Error occured", 500); // this line NEVER excutes
console.log(result); */
