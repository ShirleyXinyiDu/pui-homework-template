
/* ------------------------------------------------------------------------- */
const cartArray = new Array();

function addRollToCart() {
    const selectedGlazingElement = document.getElementById("glazingSelect")
    const selectedIndex = selectedGlazingElement.selectedIndex; //get the index of the selected glazing option
    const selectedGlazing = glazingOptions[selectedIndex].name; //get the glazing name

    const selectedPackSizeElement = document.getElementById("packSizeSelect")
    const selectedIndex2 = selectedPackSizeElement.selectedIndex; //get the index of the selected pack size option
    const selectedPackSize = packSizeOptions[selectedIndex2].size; //get the pack size

    const newRoll = new Roll(rollType, selectedGlazing, selectedPackSize, rollBasePrice);
    cartArray.push(newRoll);
    saveToLocalStorage();
}

function saveToLocalStorage() {
    const cartArrayString = JSON.stringify(cartArray);
    console.log(cartArrayString);
    localStorage.setItem('storedCartRolls', cartArrayString);
    console.log(localStorage);
    updateBadge();
    console.log("cartArray after adding to cart:");
    console.log(cartArray);
}

/* ------------------------------------------------------------------------- */
// call addRollToCart function when  "Add to Cart" button is clicked
const addToCartButton = document.getElementById('add-to-cart');
addToCartButton.addEventListener('click', addRollToCart);



/* ------------------------------------------------------------------------- */
function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedCartRolls');
    for (const cartRollData of JSON.parse(cartArrayString)) {
        cartArray.push(cartRollData);
    }
}

if (localStorage.getItem('storedCartRolls') != null) {
    retrieveFromLocalStorage();
}

