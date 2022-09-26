"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var drowPoint = function (point) {
    //..
};
drowPoint({ x: 1, y: 2 });
var drowPoint1 = function (point) {
    //..
};
var getDistance = function (pointA, pointB) {
    //....
};
drowPoint1({ x: 1, y: 2 });
/*  Hovever this is also not Cohesive does not match the
principles of Cohesion in OOP. Meanign that things that are related
should be part of ONE unit. They should go together. drowPoint1
and getDistance functions are separated from Point so that they are
violating the cohesion
 */
/* ***SOLUTION*** for this is to use CLASS that groups
variables(properties) and functions(methods) together */
//Interface is only for decorations meaning that
//they can not contain functions or any calculations so we add
//function declarations
var Point2 = /** @class */ (function () {
    function Point2() {
    }
    Point2.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    }; //method
    return Point2;
}());
/* here point is object and Point2 is class so object is an
INSTANCE of a class F.ex: human => class Ali => object */
var point2 = new Point2();
point2.x = 1;
point2.y = 2;
point2.draw();
///////////////////////////////////////////////////
var Point3 = /** @class */ (function () {
    function Point3(a, b) {
        //making optional so that initial values are not required when calling
        this.a = a;
        this.b = b;
    }
    Point3.prototype.draw = function () {
        console.log("X: " + this.a + ", Y: " + this.b);
    }; //method
    return Point3;
}());
/* here point is object and Point2 is class so object is an
INSTANCE of a class F.ex: human => class Ali => object */
var point3 = new Point3(1, 6);
point3.draw();
////////////////////////////////////////////////
var Point4 = /** @class */ (function () {
    function Point4(c, y) {
        this.c = c;
        this.y = y;
    }
    Point4.prototype.draw = function () {
        console.log("X: " + this.c + ", Y: " + this.y);
    };
    return Point4;
}());
var point4 = new Point4(1, 6);
point4.c = 4;
/*accessing the value from outside and changing. We can use
acces modifiers to control the access here */
point4.draw();
//////////////////////////////////////////////////
//More cleaner way with TS.
var Point5 = /** @class */ (function () {
    function Point5(x, y) {
        this.x = x;
        this.y = y;
    }
    Point5.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    return Point5;
}());
var point5 = new Point5(7, 5);
point5.x = 8;
point5.draw();
/////////////////////////////////////////////////
//Another way to make x and y accessible
var Point6 = /** @class */ (function () {
    function Point6(x1, y) {
        this.x1 = x1;
        this.y = y;
    }
    Point6.prototype.draw = function () {
        console.log("X: " + this.x1 + ", Y: " + this.y);
    };
    Point6.prototype.getX = function () {
        return this.x1;
    };
    Point6.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error("Value can not be less than 0");
            this.x1 = value;
        }
    };
    return Point6;
}());
exports.Point6 = Point6;
var point6 = new Point6(3, 7);
var x1 = point6.getX(); // Getters
console.log(x1);
point6.setX(10); // Setter
point6.draw();
////////////////////////////////////////////////////////////////
//Another way to make Z and Y accessible
var Point7 = /** @class */ (function () {
    function Point7(z, y) {
        this.z = z;
        this.y = y;
    }
    Point7.prototype.draw = function () {
        console.log("Z: " + this.z + ", Y: " + this.y);
    };
    Object.defineProperty(Point7.prototype, "Z", {
        get: function () {
            return this.z;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Value can not be less than 0");
                this.z = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Point7;
}());
exports.Point7 = Point7;
var point7 = new Point7(2, 4);
var z = point7.Z; //
point7.Z = 20;
