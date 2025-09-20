/*Write a program that asks the user for the number of participants. After this, the program asks for the names of all participants. 
Finally, the program prints the names of the participants on the web page in an ordered list (<ol>) in alphabetical order. (2p)*/

'use strict'

const names = []
const numberOf = parseInt(prompt(`Enter number of participants`))

for (let i = 0 ; i< numberOf; i++){
const input = (prompt(`Enter The names of ${i+1} participant ${i+1}`))
names.push(input)
} 



let html ="<ol>"

names.sort(function(a, b) {
return a.localeCompare(b);

});

for( let i =0 ;i <numberOf ;i++){
 
console.log(`${names[i]}`);
html += `<li>${names[i]}</li>`

}

html += "</ol>"
const target = document.getElementById("target")
target.innerHTML= html