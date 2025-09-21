/* Make a program that asks the user for the number of dice and the sum of the eye numbers of interest to the user. The purpose of your program is now to find out with what probability the number of dice given by the user produces the sum of the number of eyes given by the user. For example, if the user enters 3 as the number of dice and 17 as the sum of the eyes, the program calculates the probability that the sum of the three dice's eye numbers is 17. (5p)

Solve the problem by simulating: Have the program roll a given number of dice in a for-loop (e.g. 10,000 times) and calculate what proportion of the repetitions produced the sum of eye numbers of interest to the user.
Print the result on the HTML document:*/

'use strict';

const target = document.querySelector('#target'); 
console.log(target)

const numOfDice=prompt('Enter number of dice');

const sumOfDice = +prompt('Enter sum'); // use to typecast to number  use + or parse int

let count =0;
for(let i = 0 ;i <10000;i++){
    let sum = 0;
    for(let j=0;j<numOfDice; j++){ 
    const dice = Math.floor(Math.random() * 6) + 1; // use Math.round(Math.random() * 5)+1  then use Math.floor(Math.random()*6)+1 
    sum = sum+ dice;   
}
   //console.log('Sum of dice',sum);
    if(sum === sumOfDice){
        count++;
    }
}
const probability =((count/100)* 100).toFixed(2);

const html = `
<b> Number Of Dice:</b> ${numOfDice} 
<br>
<b>Probability of :</b> ${sumOfDice} is ${probability}%
`;// use back ticks for long strings

target.innerHTML = html;

