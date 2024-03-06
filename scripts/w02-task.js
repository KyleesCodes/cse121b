/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = `Kylee Tallman`;
let currentYear = '2024';
let profilePicture = 'images/HS graduation photo.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector("main#home picture img");




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
currentYear.textContent = '#year';
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);






/* Step 5 - Array */
let favoriteFoods = ['Hamburger Rice Casserole', 'Sushi', 'Bulgogi', 'Truffle Mushroom dishes'];
let foodHtml = favoriteFoods.join(",");
document.getElementById('food').innerHTML = foodHtml;
favoriteFoods.push('Chicken rice salad');
foodHtml = favoriteFoods.join(",");
document.getElementById('food').innerHTML += '<br>' + foodHtml;
favoriteFoods.shift();
foodHtml = favoriteFoods.join(",");
document.getElementById('food').innerHTML += '<br>' + foodHtml;
favoriteFoods.pop();
foodHtml = favoriteFoods.join(",");
document.getElementById('food').innerHTML += '<br>' + foodHtml;

/*
let additionalFood = 'Chicken rice salad';
favoriteFoods.push(additionalFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;
*/





