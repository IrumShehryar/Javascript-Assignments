/* Write a program that prompts the user for numbers. When the user enters one of the numbers he previously entered, the program will announce 
that the number has already been given and stops its operation and then prints all the given numbers to the console in ascending order. (2p)*/


'use strict'

const numbers = []
let input

while(true)
{
    input = Number(prompt(`Enter number`))
    if(numbers.includes(input)){
        
        alert("The number has already been given")
        break
    }
    else{
           numbers.push(input)
            
        }
}

numbers.sort((a,b)=> a-b)

/*Printing in ascending order */
for( let i = 0;  i< numbers.length  ; i++){
console.log(`${numbers[i]}`)

}