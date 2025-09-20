/* Write a function called even(), which receives an array containing numbers as a parameter. The function returns a second (usually smaller) 
array which has the even numbers of the original array. The function must not make changes to the original table. (3p)
Example: In a three-item array, there are items 2, 7 and 4. The function returns a two-item array with items 2 and 4.
Print both the original array and the new array to the console in the main program after you have called the function.
You can hard code the array, no need for prompt().*/

'use strict'

const numberArray = [9,10,2,5,6,7,4,10]

const even = (array)=>{
    let subset =[]

    for(let i =0 ; i<array.length; i++){

        if(array[i] % 2 === 0){
            subset.push(array[i])
        }

    }
    return subset
}
    
const result = even(numberArray)
console.log(`The original array is: ${numberArray}\nThe array with even numbers is: ${result}`)

    
