/* Write a voting program as described below for small-scale meeting use. (8p) The program asks for the number of candidates.
Then the program asks for the names of the candidates: Name for candidate 1 Store the candidates names and initial vote count in objects like this:

[ { name: 'ellie', votes: 0,}, {name: 'frank',votes: 0,}, {name: 'pamela',votes: 0,}, ] 

The program asks for the number of voters. The program asks each voter in turn who they will vote for. Voter should enter candidate name. 
If the voter enters an empty value instead of the voting number, it will be interpreted as an empty vote.
The program announces the name of the winner and the results by printing it to the console: The winner is pamela with 3 votes.

results:  pamela: 3 votes      frank: 1 votes       ellie: 1 votes */

'use strict'

let numberOfCandidates,name,numberOfVoters,voteFor, winner
const candidates = []
numberOfCandidates = parseInt(prompt('Enter number of candidates:'))

for(let i =0 ; i< numberOfCandidates; i++){
    name = prompt(`Enter name of candidate ${i+1}`)
    candidates.push({name: name , votes: 0})

}

numberOfVoters = parseInt(prompt('Enter number of voters'))
for( let i = 0 ; i <numberOfVoters ; i++){

    voteFor = prompt('Who should you vote for:')
    if(voteFor ===''){
        console.log(`Voter number ${i+1} casts an Empty vote`)
        continue
    }
    
    for( let j =0 ; j < candidates.length ; j++){
        if(candidates[j].name === voteFor)
            candidates[j].votes++

    }
}
 let maxVotes =-1

 console.log(candidates)
 for( let candidate of candidates){
    
    if(candidate.votes > maxVotes){
        maxVotes = candidate.votes
        winner = candidate.name
        
    }
}
 
 console.log(`The winner is ${winner} with ${maxVotes} votes `)
 console.log('results:')
 for( const c of candidates){
    console.log(`${c.name}: ${c.votes} votes`)
 }


