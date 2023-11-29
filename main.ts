/**
 * Manager -> Manish 
 * Senior Developer -> Amulya , Sudhir, Naushad, Anoop
 * Intership -> Swayam
 */


let total = 0

// Normal function in js 

// Function Definition | num1 , num2 are called parameter
const add = (num1, num2) => {
  // Return means it will send the answer / value to the location form where the function was called.
  return num1 + num2
} 

// Function call | 10 , 20 are called arguments
add(10,20)

// Above function to TS : (substract)
const sub = (num1 : number, num2 : number) => {
  return num1 - num2
}

sub(10,20)

// isIndex() -> isIndex(value, array) : index , -1

// arr : number[] -> An array that only has number data type. example - [1,2,423,42523,-134] , invalid -> [12312,2,42,"234"]

// arr : any[] -> any datatype can be present in the array

const isIndex = (value : number, arr : number[]) : number => {
  // for of loop
  // [11,22,33,44,55] value = 33
  for(let index = 0; index < arr.length; index++ ){
    if(value == arr[index]){
      return index
    }
  }
  return -1
}


let emp : number = isIndex(12, [1,2,3,4,5,6,10,12,13,14,234,2,3,432,232])

if(emp < 10){
  console.log("Vvip");
}else{
  console.log("Normal");
}


// let sol = isValuePresent(45, [10,20,30,40])
// console.log(sol , " isValuePresent");


// isIndex() -> 10 Places -> 10 

// isIndex() -> true / false | arr , value

// console.log(isIndex(33,  [11,22,33,44,55])) // answer print console

//**************** What Can Go Wrong ***********/

// Swayam write a function called isIndex which will return True if the value present or false if the if the value is not present.


// --- Who , What , Were 















// - void -> Void is a return type, (Means it is used on function to denote that the fucntion won't return any value )


// - any -> You can use this to automatically detect the type of a data.
