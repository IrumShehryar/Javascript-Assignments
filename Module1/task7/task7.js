/* Write a program that rolls user defined number of dice and displays the sum of the results of the dice rolls.(2p)
First, program asks the user for the number of dice rolls.
Then the program throws a die as many times as the user defined.
Print the sum of the results in the console or in the HTML document.*/

'use strict'

const numOfDice = parseInt(prompt("Enter the number of dices you want to roll"))
let roll
let sum =0

for(let i=0 ;i<numOfDice;i++){

   roll = Math.floor((Math.random() *6)) +1
   document.body.innerHTML += `The dice ${i+1} yield : ${roll}<br>`
   sum = sum + roll

}

document.body.innerHTML += `The sum of the dices is : ${sum}`