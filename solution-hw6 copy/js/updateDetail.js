// get query string from URL
// search parameters with ?
const queryString = window.location.search;
// use query string to create URLSearchParams object
const params = new URLSearchParams(queryString);
// access the parameter using "get"
const rollType = params.get('roll');

/* ------------------------------------------------------------------------- */
// update current roll image path, roll price, and roll name


const rollImage = document.querySelector('#detail-img');
const clickedRollImage = rolls[rollType].imageFile;
rollImage.src = '../assets/products/' + clickedRollImage;

const rollPrice = document.querySelector('#detail-summary-price');
rollPrice.innerText = '$' + rolls[rollType].basePrice;

const rollName = document.querySelector('h3');
rollName.innerText = rollType + " Cinnamon Roll"

