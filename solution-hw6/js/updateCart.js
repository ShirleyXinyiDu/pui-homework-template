
/* --------------------------update the cart page---------------------------- */

// create a cart array
const cartArray = new Array();

function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    const newRoll = new Roll(rollType, rollGlazing, packSize, basePrice); // create a new Roll object
    cartArray.push(newRoll); // add the Roll object to cart array
    return newRoll;
}

/* ------------------------------------------------------------------------- */
function createElement(cartRoll) {
    // get template element
    const template = document.querySelector('#cartRoll-template');
    // create deep copy of template’s contents
    const clone = template.content.cloneNode(true);
    // connect this clone to cartRoll.element
    cartRoll.element = clone.querySelector('.cartRoll-info-price');
    // when remove link/button is clicked, delete the cartRoll and update the total price
    const linkRemove = cartRoll.element.querySelector('#remove-link');
    linkRemove.addEventListener('click', function() {
        deleteRoll(cartRoll);
        updateCheckOutPrice();
    });
    // add the cartRoll clone to the DOM
    // find the cartRoll parent (cart-products) and add the cartRoll as its child
    const cartRollListElement = document.querySelector('.cart-products');
    cartRollListElement.append(cartRoll.element);
    // populate the cartRoll clone with the updated cartRoll information
    updateElement(cartRoll);
}

/* ------------------------------------------------------------------------- */
// update functions
const totalPriceElement = document.querySelector("#total-price");

function updateElement(cartRoll) {
    // update image
    const cartRollImageElement = cartRoll.element.querySelector('#cartRoll-img');
    const imageFileName = rolls[cartRoll.type].imageFile;
    cartRollImageElement.src = '../assets/products/' + imageFileName;
    // update roll type name
    const cartRollTypeElement = cartRoll.element.querySelector('#cartRoll-type');
    cartRollTypeElement.innerText = cartRoll.type + ' Cinnamon Roll';
    // update glazing
    const cartRollGlazingElement = cartRoll.element.querySelector('#cartRoll-glazing');
    cartRollGlazingElement.innerText = 'Glazing: ' + cartRoll.glazing;
    // update packsize
    const cartRollPackSizeElement = cartRoll.element.querySelector('#cartRoll-packSize');
    cartRollPackSizeElement.innerText = 'Pack Size: ' + cartRoll.size;
    // update roll price
    const cartRollPriceElement = cartRoll.element.querySelector('.cart-product-price');
    const cartRollPrice = updateRollPrice(cartRoll);
    cartRollPriceElement.innerText = '$ ' + cartRollPrice;
    // update total checkout price
    updateCheckOutPrice();
}

// update and return the updated price of the current roll
function updateRollPrice(cartRoll) {
    glazingPrice = glazingOptions.find(x => x.name === cartRoll.glazing).priceAdaptation;
    packSizePrice = packSizeOptions.find(x => x.size === cartRoll.size).priceAdaptation;
    basePrice = cartRoll.basePrice;
    price = ((Number(basePrice) + Number(glazingPrice)) * packSizePrice).toFixed(2)
    return price
}
// update the checkout price
// loop through each cartRoll in the set to add up the prices
function updateCheckOutPrice(){
    let totalCheckOutPrice = 0; // start the total price from 0
    for (const cartRoll of cartArray){
        price = updateRollPrice(cartRoll); // get the current roll price
        totalCheckOutPrice += Number(price); // add the current roll price to totol price
    }
    totalPriceElement.innerText = '$ ' + (totalCheckOutPrice).toFixed(2); // update the display text
}

/* ------------delete roll, remove it from array, and save to local storage-------------- */
function deleteRoll(cartRoll) {
    // remove the cartRoll DOM object from UI
    cartRoll.element.remove(); 
    // remove the cartRoll item from array
    const index = cartArray.indexOf(cartRoll); // get the index of the cartRoll item
    cartArray.splice(index, 1); // remove the item based on index
    
    saveToLocalStorage(); //call the function to save the updated cart to local storage
    updateBadge(); //update the number of rolls shown by the cart badge
}


/* ---------------------------save the cart to local storage----------------------------- */
function saveToLocalStorage() {
    const cartArrayString = JSON.stringify(cartArray); //object --> JSON
    localStorage.setItem('storedCartRolls', cartArrayString); //save it in local storage
    console.log(localStorage.getItem('storedCartRolls')); //print the content of the cart 
}


/* ------------------------retrieve the cart from local storage-------------------------- */
function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedCartRolls'); //retrieve data from local storage
    const cartArrayObject = JSON.parse(cartArrayString); //JSON --> object
    for (const cartRollData of cartArrayObject) {
        // create a Roll instance containing current cartRoll info and add it to the cart
        const cartRoll = addNewRoll(cartRollData.type, cartRollData.glazing, cartRollData.size, cartRollData.basePrice);
        // create an element for current cartRoll
        createElement(cartRoll);
    }
}

//if local storage is not null (has contents), retrieve the cart from local storage
if (localStorage.getItem('storedCartRolls') != null) {
    retrieveFromLocalStorage();
}

  
  

