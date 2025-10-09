'use strict';

const apiUrl = 'https://media1.edu.metropolia.fi/restaurant/api/v1'

// fetch data 
async function fetchData(url, options ={}) {

 const response = await fetch(url,options)   
 if(!response.ok){
    throw new Error('Error from the server :' + response.status)
 }
 const data = await response.json()
 return data
}


//sorting alphabetically

const sortAlphabeticallyByName = list =>{
list.sort((a,b) => {
  
  const aName = a.name.toLowerCase()
  const bName = b.name.toLowerCase()
  if(aName > bName){
    return 1
  }

  if(aName < bName){
      return -1
}
  return 0
})

}
// build a string for googlemaps
const googleMaps = restaurant => {
  return `https://maps.google.com/?q=${restaurant.address},${restaurant.postalCode},${restaurant.city}`;
}

// create rows 
const table = document.querySelector('table');
const  restaurantRow = (restaurant)=>{

const tr = document.createElement('tr')
const tdName = document.createElement('td')
const tdAddress = document.createElement('td')

tdName.innerText = restaurant.name
tdAddress.innerText=restaurant.address

tr.appendChild(tdName)
tr.appendChild(tdAddress)
return(table.appendChild(tr))
}

// create  modal with courses information
const restaurantModal = (restaurant,courses) =>{

    const {name, address, postalCode, city, phone, company} = restaurant
    
    let restaurantHtml = `

    <div class="dialog-head">
    <h1>${name}</h1>

    <button type="button">❌</button>
    </div>

    <p>
    Address: <a href="${googleMaps(restaurant)}">${address}</a><br>
    Postal code: ${postalCode}<br>
    City: ${city}<br>
    Phone number: <a href="tel:${phone}">${phone}</a><br>
    Company: ${company}
    </p>
    `
      const dialog = document.querySelector('dialog');
      
    let coursesHtml = `
    <table>
        <thead>
            <tr>
                <th> Name</th>
                <th> Price</th>
                <th>Diet</th>
                
                </tr>
            </thead>
            <tbody> `
        for(const {name: dishName,price,diets}of (courses || [])){
            console.log(courses)
            coursesHtml += `
            <tr>
            <td>${dishName || ''}</td>
            <td>${price || 'no price defined'}</td>
            <td>${diets || 'no diet defined'}</td>
            </tr>`
            }
            coursesHtml += '</tbody></table>'

            dialog.innerHTML = restaurantHtml + coursesHtml
            dialog.showModal();
            dialog.querySelector('button').addEventListener('click', () => {
            dialog.close();
            removeHighlight();
    })
// open modal and populate the courses details
}

// remove highlight 
const highlight = 'highlight'
const removeHighlight = () => {
  table.querySelectorAll('tr').forEach(tr => {
    tr.classList.remove(highlight);
  });
}

// add restaurant to table and attach event listener

const addRestaurantToTable = restaurant => {

    const tr = restaurantRow(restaurant)
    tr.addEventListener('click',async()=>{
    removeHighlight()
    tr.classList.add(highlight)
    
    const todaysMenu = await fetchData(`${apiUrl}/restaurants/daily/${restaurant._id}/en`)
    console.log(todaysMenu.courses)
    restaurantModal(restaurant,todaysMenu.courses);
    })
}
// the starter get restaurants

async function getRestaurants() {
    
    try{
    const restaurants=await fetchData(apiUrl + '/restaurants')
    console.log(restaurants)
    sortAlphabeticallyByName(restaurants);
    restaurants.forEach(addRestaurantToTable);
    } catch(error){
        console.error(error.message)
    }
}
getRestaurants()

