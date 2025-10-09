'use strict';

(async () => {

    const url = 'https://reqres.in/api/users'

    const payload = {
        name : 'Irum',
        job : 'Student'
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1',
        },
        body: JSON.stringify(payload)
    }

    try{

        const response = await fetch(url,options)

        if(!response.ok){
            throw new Error(`HTTP ${response.status} ${response.statusText}`)
        }
        const data = await response.json()
        console.log('POST /users response:',data)

        console.log(`Created user ${data.name} as ${data.job}. New id: ${data.id}. At: ${data.createdAt}`)
    } catch(err){

        console.error('POST failed',err)
    }

}) ()