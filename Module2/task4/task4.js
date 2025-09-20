/* Write a program that asks the user for numbers until he gives zero. The given numbers are printed in the console from the largest to the smallest. (2p)*/

'use strict'

const numbers = []
let i=0
let input

do{
     input = Number(prompt(`Enter number ${i+1}`))

    if(input !== 0){
    numbers.push(input)
    i++

    }
}

while (input !== 0)

/*Printing in descending order */
numbers.sort((a,b)=> (b - a))

for( i = 0 ; i< numbers.length -1 ; i++){
console.log(`${numbers[i]}`)

}