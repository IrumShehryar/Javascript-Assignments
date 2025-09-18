/* Write a program that prompts for three integers. The program prints the sum, product and average of the numbers to the HTML document.*/

'use strict'

const num1 = parseInt(prompt('Enter number 1'))
const num2 = parseInt(prompt('Enter number 2'))
const num3 = parseInt(prompt('Enter number 3'))
const sum =  num1 + num2 + num3
const product = num1 * num2 * num3
const average = sum/3
console.log('sum',sum,'product',product,'average',average)
document.body.innerHTML = `<h1>The 3 Integers are:${num1},${num2},${num3}</h1> <br>
                            Sum of 3 Integers = ${sum}<br>
                            Product of 3 Integers = ${product}<br>
                            Average of 3 Integers = ${average} `