
/* -------------------------------------------------------------------------------------- */
// create a cart array
const cartArray = new Array();

function addRollToCart() {
    const selectedGlazingElement = document.getElementById("glazingSelect")
    const selectedIndex = selectedGlazingElement.selectedIndex; //get the index of the selected glazing option
    const selectedGlazing = glazingOptions[selectedIndex].name; //get the glazing name

    const selectedPackSizeElement = document.getElementById("packSizeSelect")
    const selectedIndex2 = selectedPackSizeElement.selectedIndex; //get the index of the selected pack size option
    const selectedPackSize = packSizeOptions[selectedIndex2].size; //get the pack size

    const newRoll = new Roll(rollType, selectedGlazing, selectedPackSize, rollBasePrice);
    cartArray.push(newRoll); //add the new roll to the cart array
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
        cartArray.push(cartRollData);
    }
}
//if local storage is not null (has contents), retrieve the cart from local storage
if (localStorage.getItem('storedCartRolls') != null) {
    retrieveFromLocalStorage();
}

/* ----------call addRollToCart function when  "Add to Cart" button is clicked----------- */
const addToCartButton = document.getElementById('add-to-cart');
addToCartButton.addEventListener('click', addRollToCart);
