/* 2. Write a program that prompts for user's name and then greets the user. Print the result to the HTML document: Hello, Name! */
'use strict'

const name = prompt("Enter your name")
console.log('Hello',name)
document.body.innerHTML = `<h1>Hello,${name}</h1>`

