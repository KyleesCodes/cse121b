/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Kylee Tallman',
    photo: 'images/HS graduation photo.jpg',
    favortieFoods: [
        'Hamburger Rice Casserole',
        'Sushi', 
        'Bulgogi', 
        'Truffle Mushroom dishes',
    ],
    hobbies: [
        'Reading',
        'Watching foreign television',
        'Traveling',
        'Going on drives',
        'Redecorating',
    ],
    placesLived: [],
};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Phoenix, Arizona',
        length: '14 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Nampa, Idaho',
        length: '2 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Spokane, Washington',
        length: '2 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Lexington, Kentucky',
        length: '3 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Vancouver, Washington',
        length: '1 year'
    }
);
myProfile.placesLived.push(
    {
        place: 'Lehi, Utah',
        length: '1 year'
    }
);
myProfile.placesLived.push(
    {
        place: 'Sandy, Utah',
        length: '1 year'
    }
);
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favortieFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(function(place) {
    const dt = document.createElement('dt');
    dt.textContent = place.place;
    const dd = document.createElement('dd');
    dd.textContent = place.length;
    document.getElementById('places-lived').appendChild(dt);
    document.getElementById('places-lived').appendChild(dd);
  });

