/* Write a function that returns a random dice roll between 1 and 6. The function should not have any parameters. Write a main program that rolls 
the dice until the result is 6. The main program should print out the result of each roll in an unordered list (<ul>). (2p)*/


'use strict'

let dice =0
let html ='<ul>'

const diceRoll= () => Math.floor(Math.random()*6) +1

while(dice!==6){
    
        dice = diceRoll()
        html += `<li>${dice}</li>`
     
}

html += '</ul>'
const target=document.getElementById('target')
target.innerHTML = html








