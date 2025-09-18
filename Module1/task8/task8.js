/* Write a program that prompts the user for the start and end year. The program prints all leap years from the interval 
given by the user. Printing is done in an unordered list to the HTML document. */

'use strict'

const start_year = parseInt(prompt("Enter the start year ")) 
const end_year = parseInt(prompt("Enter the end year "))

const target = document.querySelector("#target") 
let html = "<ul>"

for (let year = start_year; year <= end_year; year++){

    if((year % 4 === 0 && year% 100 !=0 ) || year % 400 === 0)
    {
        html += `<li>${year}</li>`
        
    }

}
html += "</ul>"
target.innerHTML = html