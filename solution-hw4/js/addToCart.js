class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

/* ------------------------------------------------------------------------- */
function addRollToCart() {
    const selectedGlazingElement = document.getElementById("glazingSelect")
    const selectedIndex = selectedGlazingElement.selectedIndex; //get the index of the selected glazing option
    const selectedGlazing = glazingOptions[selectedIndex].name; //get the glazing name

    const selectedPackSizeElement = document.getElementById("packSizeSelect")
    const selectedIndex2 = selectedPackSizeElement.selectedIndex; //get the index of the selected pack size option
    const selectedPackSize = packSizeOptions[selectedIndex2].size; //get the pack size

    const newRoll = new Roll(rollType, selectedGlazing, selectedPackSize, rollBasePrice);
    cart.push(newRoll); //add an instance of class Roll to the array cart
    console.log(cart);
}

/* ------------------------------------------------------------------------- */
// call addRollToCart function when  "Add to Cart" button is clicked
const addToCartButton = document.getElementById('add-to-cart');
addToCartButton.addEventListener('click', addRollToCart);

