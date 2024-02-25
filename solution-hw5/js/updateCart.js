class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}
/* ------------------------------------------------------------------------- */
// create a set for cart
const cartSet = new Set();
// function to add a new object to cartSet
function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    const newRoll = new Roll(rollType, rollGlazing, packSize, basePrice); // create a new Roll object
    cartSet.add(newRoll); // add the Roll object to cartSet
    return newRoll;
}
// make 4 new objects and add them to the cart set
const cartRoll1 = addNewRoll('Original', 'Sugar milk', 1, rolls['Original'].basePrice);
const cartRoll2 = addNewRoll('Walnut', 'Vanilla milk', 12, rolls['Walnut'].basePrice);
const cartRoll3 = addNewRoll('Raisin', 'Sugar milk', 3, rolls['Raisin'].basePrice);
const cartRoll4 = addNewRoll('Apple', 'Keep original', 3, rolls['Apple'].basePrice);

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
    for (const cartRoll of cartSet){
        price = updateRollPrice(cartRoll); // get the current roll price
        totalCheckOutPrice += Number(price); // add the current roll price to totol price
    }
    totalPriceElement.innerText = '$ ' + (totalCheckOutPrice).toFixed(2); // update the display text
}

function deleteRoll(cartRoll) {
    cartRoll.element.remove(); // remove the cartRoll DOM object from UI
    cartSet.delete(cartRoll); // remove the cartRoll object from cart set
}

// create element for each cartRoll in cartSet
for (const cartRoll of cartSet) {
    createElement(cartRoll);
}

