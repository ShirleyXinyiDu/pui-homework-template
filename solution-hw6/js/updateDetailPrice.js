
/* ------------------------update price in the product-detail page------------------------------- */
  
let glazingOptionsElement = document.querySelector('#glazingSelect');
let packSizeOptionsElement = document.querySelector('#packSizeSelect');

// adjusted the function and the for loops
function populateGlazingOptions() {
    for (let i = 0; i < glazingOptions.length; i++) {
      const option = document.createElement('option');
      option.value = glazingOptions[i].priceAdaptation;
      option.textContent = glazingOptions[i].name;
      glazingOptionsElement.appendChild(option);
    }
}
function populatePackSizeOptions() {
    for (let i = 0; i < packSizeOptions.length; i++) {
      const option = document.createElement('option');
      option.value = packSizeOptions[i].priceAdaptation;
      option.textContent = packSizeOptions[i].size;
      packSizeOptionsElement.appendChild(option);
    }
}

function loadOptions(){
    populateGlazingOptions();
    populatePackSizeOptions();
}
window.onload = loadOptions();

/* ------------------------------------------------------------------------- */
// set the base price for one cinnamon roll
let rollBasePrice = rolls[rollType].basePrice;

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
    packSizePriceAdaptation = this.value;//updated current packSizePriceAdaptation based on current pack size selection
    updatePrice(glazingPriceAdaptation, packSizePriceAdaptation)
}
//calculate and update the price based on glazingPrice and packSizePrice
function updatePrice(glazingPrice, packSizePrice) {
    //toFixed(2) ==> round to two decimals
    let price = ((Number(rollBasePrice) + Number(glazingPrice)) * packSizePrice).toFixed(2)
    finalPriceElement.innerText = '$' + price;
}

/* ------------------------------------------------------------------------- */

glazingOptionsElement.addEventListener('change', onSelectGlazingChange);
//when a "change" event happens in the glazingSelectElement, call the onSelectGlazingChange function
packSizeOptionsElement.addEventListener('change', onSelectPackSizeChange);






