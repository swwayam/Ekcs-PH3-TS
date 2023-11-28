/**
 * Manager -> Amulya 
 * Senior Developer -> Manish, Sudhir, Naushad, Anoop
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

const isIndex = (value : number, arr : number[]) => {
  // for of loop
  // [11,22,33,44,55] value = 33
  for(let index = 0; index < arr.length; index++ ){
    if(value == arr[index]){
      return index
    }
  }
  return -1
}

// isIndex() -> true / false | arr , value

console.log(isIndex(33,  [11,22,33,44,55])) // answer print console
// let indexPresent = isIndex(33,  [11,22,33,44,55]) // answer store in a variable

// - void -> Void is a return type, (Means it is used on function to denote that the fucntion won't return any value )



// - any -> You can use this to automatically detect the type of a data.
