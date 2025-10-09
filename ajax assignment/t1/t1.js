
'use strict';

(async () => {
    const url= 'https://reqres.in/api/users/1'


const options = {
    headers: {
        'x-api-key': 'reqres-free-v1',
    },
}

try {
    const response = await fetch(url,options)
    if(!response.ok){
        throw new Error(`HTTP ${response.status} ${response.statusText}`)
    }
    const data = await response.json()
    console.log('GET /users/1 response:', data)
    console.log(data.data.first_name)

} catch (err) {
    console.log('Fetch failed:', err)
}
}) ()

