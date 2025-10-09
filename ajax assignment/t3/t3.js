'use strict';

/* GET  */
(async () => {
  try {
    const url = 'https://reqres.in/api/unknown/23';
    const options = { headers: { 'x-api-key': 'reqres-free-v1' } };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('GET success:', data);
  } catch (error) {
    console.error('GET failed:', error.message);
  }
})();

/* POST  */
(async () => {
  try {
    const url = 'https://reqres.in/api/unknown/23';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify({ name: 'Irum', job: 'Student' }),
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('POST success:', data);
  } catch (error) {
    console.error('POST failed:', error.message);
  }
})();

/* PUT */
(async () => {
  try {
    const url = 'https://reqres.in/api/unknown/23';
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify({ name: 'Irum', job: 'Learner' }),
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('PUT success:', data);
  } catch (error) {
    console.error('PUT failed:', error.message);
  }
})();

/* DELETE */
(async () => {
  try {
    const url = 'https://reqres.in/api/unknown/23';
    const options = {
      method: 'DELETE',
      headers: { 'x-api-key': 'reqres-free-v1' },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    
    const data = await response.json();
    console.log('DELETE success:', data);
  } catch (error) {
    console.error('DELETE failed:', error.message);
  }
})();
