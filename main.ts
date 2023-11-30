/**
 * Manager -> Naushad
 * Senior Developer -> Amulya , Sudhir, Manish, Anoop
 * Client -> Swayam
 */

let total = 0;

// Normal function in js

// Function Definition | num1 , num2 are called parameter
const add = (num1, num2) => {
  // Return means it will send the answer / value to the location form where the function was called.
  return num1 + num2;
};

// Function call | 10 , 20 are called arguments
add(10, 20);

// Above function to TS : (substract)
const sub = (num1: number, num2: number) => {
  return num1 - num2;
};

sub(10, 20);

// isIndex() -> isIndex(value, array) : index , -1

// arr : number[] -> An array that only has number data type. example - [1,2,423,42523,-134] , invalid -> [12312,2,42,"234"]

// arr : any[] -> any datatype can be present in the array

const isIndex = (value: number, arr: number[]): number => {
  // for of loop
  // [11,22,33,44,55] value = 33
  for (let index = 0; index < arr.length; index++) {
    if (value == arr[index]) {
      return index;
    }
  }
  return -1;
};

let emp: number = isIndex(
  12,
  [1, 2, 3, 4, 5, 6, 10, 12, 13, 14, 234, 2, 3, 432, 232]
);

if (emp < 10) {
  console.log("Vvip");
} else {
  console.log("Normal");
}

// let sol = isValuePresent(45, [10,20,30,40])
// console.log(sol , " isValuePresent");

// isIndex() -> 10 Places -> 10

// isIndex() -> true / false | arr , value

// console.log(isIndex(33,  [11,22,33,44,55])) // answer print console

// Names no numbers

const printName = (name: string): void => {
  console.log(name);
};

// Array of names
let names = ["Swayam", "Naushad", "Anoop", "Amulya", "Sudhir", "Manish"];

// Write a function called as findName(name) if the name is present in the array or not.

// 1 Approach

// 1. We have been given array -> true
// 2. Write function findName(name)
// 3. Find if value is present in array
//    -- Anoop -> element found
//    -- EKCS  -> element not found

const findName = (name) => {
  // for(let i = 0; i < names.length; i++){
  //   if(names[i] == name){
  //     return i
  //   }
  // }

  // return -1

  // for (const nameArr of names) {
  //   if (nameArr == name) {
  //     return "Element found";
  //   }
  // }
  // return "Element not found";


  // return names.findIndex(name) 

  // return names.includes(name)
};

printName("Amulya");


const users = [
  {
    id: 0,
    email: "sid@gmail.com",
    type: "normal",
  },
  {
    id: 1,
    email: "arinay@gmail.com",
    type: "normal",
  },
  {
    id: 2,
    email: "namya@gmail.com",
    type: "normal",
  },
  {
    id: 3,
    email: "swayam@gmail.com",
    type: "normal",
  },
  {
    id: 4,
    email: "random@gmail.com",
    type: "normal",
  },
];


const findEmailFromObj = (email) => {
  for (const user of users) {
    if(user.email == email){
      return "User present"
    }
  }
  return "Invalid user"
}

// - void -> Void is a return type, (Means it is used on function to denote that the fucntion won't return any value )

// - any -> You can use this to automatically detect the type of a data.
