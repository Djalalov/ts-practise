console.log("Lets get started!");
//******** Type declarations *************//
/* let a: number;
let b: string;
let c: boolean;
let d: any; //undefined
let e: number[] = [1, 2, 3]; //object
let f: any[] = [1, true, "foo", false]; //object */

/* const person: {
	name: string;
	age: number;
} = { */
/* const person = {
	name: "Elyorbek",
	age: 30,
	hobbies: ["Sports", "Business"],
	role: [2, "author"], /// UNiON TYPE // Tuples = fixed length array
};

let favoriteThings: string[];

favoriteThings = ["cars", "planes"];

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
} */

//**************ENUM enum {NEW, OLD}******************//

/* const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2; 

enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

const person = {
	name: "Elyorbek",
	age: 30,
	hobbies: ["Sports", "Business"],
	role: Role.ADMIN,
};

if (person.role === Role.AUTHOR) {
	console.log("is admin");
}

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
	const result = n1 + n2;
	if (showResult) {
		console.log(phrase + result);
	} else {
		return n1 + n2;
	}
}

const number1 = 5;
const number2 = 2.3;
const printResult = true;
const resultPhrase = "Result is: ";

const result = add(number1, number2, printResult, resultPhrase);
*/

//************TYPE ASSERTION***********//
/* let message;
message = "abc";
let endsWithC = (<string>message).toUpperCase(); // type assertions 1
let alternative = (message as string).toUpperCase(); //type assertions 2 */

//inline annotationmaybe useful here however this might be repitative so INTERFACES come handy
let drowPoint = (point: { x: number; y: number }) => {
	//..
};
drowPoint({ x: 1, y: 2 });
/////////////////////////////////////////////////////////
interface Point {
	x: number;
	y: number;
} //can reused multiple places
let drowPoint1 = (point: Point) => {
	//..
};

let getDistance = (pointA: Point, pointB: Point) => {
	//....
};
drowPoint1({ x: 1, y: 2 });
/*  Hovever this is also not Cohesive does not match the
principles of Cohesion in OOP. Meaning that things that are related
should be part of ONE unit. They should go together. drowPoint1
and getDistance functions are separated from Point so that they are
violating the cohesion
 */

/* ***SOLUTION*** for this is to use CLASS that groups 
variables(properties) and functions(methods) together */
//Interface is only for decorations meaning that
//they can not contain functions or any calculations so we add
//function declarations

class Point2 {
	x!: number; //properties/fields
	y!: number;

	draw() {
		console.log("X: " + this.x + ", Y: " + this.y);
	} //method
}
/* here point is object and Point2 is class so object is an 
INSTANCE of a class F.ex: human => class Ali => object */
let point2 = new Point2();
point2.x = 1;
point2.y = 2;
point2.draw();

///////////////////////////////////////////////////

class Point3 {
	a?: number; //properties/fields
	b?: number;

	constructor(a?: number, b?: number) {
		//making optional so that initial values are not required when calling
		this.a = a;
		this.b = b;
	}
	draw() {
		console.log("X: " + this.a + ", Y: " + this.b);
	} //method
}
/* here point is object and Point2 is class so object is an 
INSTANCE of a class F.ex: human => class Ali => object */
let point3 = new Point3(1, 6);
point3.draw();
////////////////////////////////////////////////

class Point4 {
	c?: number;
	private y?: number; //making it not accessible

	constructor(c?: number, y?: number) {
		this.c = c;
		this.y = y;
	}
	draw() {
		console.log("X: " + this.c + ", Y: " + this.y);
	}
}
let point4 = new Point4(1, 6);
point4.c = 4;

/*accessing the value from outside and changing. We can use
acces modifiers to control the access here */
point4.draw();

//////////////////////////////////////////////////

//More cleaner way with TS.
class Point5 {
	constructor(public x?: number, private y?: number) {}
	draw() {
		console.log("X: " + this.x + ", Y: " + this.y);
	}
}
let point5 = new Point5(7, 5);
point5.x = 8;
point5.draw();
/////////////////////////////////////////////////

//Another way to make x and y accessible
export class Point6 {
	constructor(public x1?: number, private y?: number) {}
	draw() {
		console.log("X: " + this.x1 + ", Y: " + this.y);
	}

	getX() {
		return this.x1;
	}

	setX(value: number) {
		if (value < 0) {
			throw new Error("Value can not be less than 0");
			this.x1 = value;
		}
	}
}
let point6 = new Point6(3, 7);
let x1 = point6.getX(); // Getters
console.log(x1);

point6.setX(10); // Setter
point6.draw();

////////////////////////////////////////////////////////////////

//Another way to make Z and Y accessible
export class Point7 {
	constructor(public z?: number, private y?: number) {}
	draw() {
		console.log("Z: " + this.z + ", Y: " + this.y);
	}

	get Z() {
		return this.z;
	}

	set Z(value: any) {
		if (value < 0) {
			throw new Error("Value can not be less than 0");
			this.z = value;
		}
	}
}
let point7 = new Point7(2, 4);
let z = point7.Z; //
point7.Z = 20;
