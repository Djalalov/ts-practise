//Return types

function add(n1: number, n2: number) {
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
function printResult2(num: number): void {
	console.log("Result: " + num);
}
printResult2(add(5, 12));

//Function type

let combineValues: Function; // Normal assigning
let combineValues1: () => number; // make it returns number
let combineValues2: (a: number, b: number) => number; // we can assign parameters as well

combineValues = add;
//combineValues2 = printResult2; // its not possible beacuse arguments do not match!
console.log(combineValues(5, 20));

//combining different parameters
function addAndHandle(n1: number, n2: number, cb: (foo: number) => void) {
	const result = n1 + n2;
	cb(result);
}

addAndHandle(10, 10, result => {
	console.log(result);
});
