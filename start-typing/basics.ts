// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 11;

let userName: string = "5";

let isInstructor: boolean = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: /*This is a type description*/ {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

let people: {
  name: string;
  age: number;
}[]; // an array of persons

let course = "React - The Complete Guide";

// This is possible but redundant.
// let course: string = 'React - The Complete Guide';

// course = 234234; // Not working because of type inference

// Union types

let myCourse: string | number = "React - The complete course";

myCourse = 24234;

// Understanding Type Aliases

type Person = {
  name: string;
  age: number;
};

let myPeople: Person[];

// Functions & types

function myAdd(a: number, b: number): number {
  return a + b;
}

function myPrint(value: any): void {
  console.log(value);
}

// Generics

// This is not using ts's power
function insertAtBeginning(array: any[], value: any): any[] {
  const newArray = [value, ...array];
  return newArray;
}

// Better
function betterInsertAtBeginning<T>(array: T[], value: T): T[] {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
updatedArray[0].split("");

// The <number> is not actually needed in this example, just for visualizing purposes
const betterUpdatedArray = betterInsertAtBeginning<number>(demoArray, -1); // [-1, 1, 2, 3]
// betterUpdatedArray[0].split(""); // That does not work anymore
