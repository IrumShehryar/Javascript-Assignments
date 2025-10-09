'use strict';


async function fetchData(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`);
  }
  // Return the response as a JSON promise 
  return response.json();
}

// TESTING (POST)
(async function main() {
  try {
    const user = { name: 'John Doe', job: 'Developer' };
    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1', // include if required in your course
      },
      body: JSON.stringify(user),
    };

    const userData = await fetchData(url, options);
    console.log('POST result:', userData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
