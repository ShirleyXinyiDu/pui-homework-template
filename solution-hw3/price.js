// build object for glazing options
const glazingOptions = {
    'Keep original': 0.00,
    'Sugar milk': 0.00,
    'Vanilla milk': 0.50,
    'Double chocolate': 1.50
};
// build object for pack size options
const packSizesOptions = {
    '1': 1,
    '3': 3,
    '6': 5,
    '12': 10
};

let glazingOptionsElement = document.querySelector('#glazingOptions');
let packSizeOptionsElement = document.querySelector('#packSizeOptions');
// Populate the options drop-down fields with objects, get help from chatGPT in building these two "for" loops
// [key, value] ==> [name, priceAdaptation] 
for (const [name, priceAdaptation] of Object.entries(glazingOptions)) {
    const option = document.createElement('option'); // create an option for each name
    option.value = priceAdaptation; 
    option.textContent = name; //the name of the glazing option to be displayed 
    glazingOptionsElement.appendChild(option); // append the option to the element
}

for (const [packSize, priceAdaptation] of Object.entries(packSizesOptions)) {
    const option2 = document.createElement('option');
    option2.value = priceAdaptation;
    option2.textContent = packSize;
    packSizeOptionsElement.appendChild(option2);
}

// set the base price for one cinnamon roll
const basePrice = 2.49;

let finalPriceElement = document.querySelector('#detail-summary-price');
let glazingPriceAdaptation = 0.00; //start the price adapation for glazing from 'Keep original': 0.00
let packSizePriceAdaptation = 1; //start the price adapation for pack size from '1': 1

//update price based on glazing selection
function onSelectGlazingChange() {
    glazingPriceAdaptation = this.value; //updated current glazingPriceAdaptation based on current glazing selection
    updatePrice(glazingPriceAdaptation, packSizePriceAdaptation)
}
//update price based on pack size selection
function onSelectPackSizeChange() {
    packSizePriceAdaptation = this.value; //updated current packSizePriceAdaptation based on current pack size selection
    updatePrice(glazingPriceAdaptation, packSizePriceAdaptation)
}
//calculate and update the price based on glazingPrice and packSizePrice
function updatePrice(glazingPrice, packSizePrice) {
    //toFixed(2) ==> round to two decimals
    let price = ((Number(basePrice) + Number(glazingPrice)) * packSizePrice).toFixed(2)
    finalPriceElement.innerText = '$' + price;
}

let glazingSelectElement = document.querySelector('#glazingOptions');
glazingSelectElement.addEventListener('change', onSelectGlazingChange);
//when a "change" event happens in the glazingSelectElement, call the onSelectGlazingChange function

let packSizeSelectElement = document.querySelector('#packSizeOptions');
packSizeSelectElement.addEventListener('change', onSelectPackSizeChange);






