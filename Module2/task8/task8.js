/*Write a function called concat(), which receives an array of strings as a parameter. The function returns a string formed by concatenating the 
elements of the array. (2p)
Example: In a four-item array, there are items Johnny, DeeDee, Joey and Marky. The function returns the string JohnnyDeeDeeJoeyMarky.
Do not use array.join() function
You can hardcode the array, no need for prompt().
Print the result to HTML document. */

const arrayOfStrings = ['Johnny','DeeDee','Joey','Marky',]


const concat=(array) => {

    let str = ''
    for(let i=0 ; i < array.length ;i++){
    
        if(array[i]!=','){
            str += array[i]
        }
    }   

return str
}

const html= concat(arrayOfStrings)
/*console.log(html)*/
target = document.querySelector('#target')
target.innerHTML = html