/* Write a program that asks for the names of six dogs. The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p)*/'use strict'

const names = []


for (let i = 0 ; i< 6; i++){
    const input = (prompt(`Enter The names of dog${i+1}`))
    names.push(input)
} 



let html ="<ul>"

names.sort(function(a, b) {
return b.localeCompare(a);

});

for( let i =0 ;i <6 ;i++){
 
console.log(`${names[i]}`);
html += `<li>${names[i]}</li>`

}

html += "</ul>"
const target = document.getElementById("target")
target.innerHTML= html