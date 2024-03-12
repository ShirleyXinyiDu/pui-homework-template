
/* --------------------------update the cart badge---------------------------- */

function updateBadge() {
    const cartCount = document.querySelector('p.cart-badge'); //select the cart rolls counter element
    cartArrayString = localStorage.getItem('storedCartRolls'); //get storedCartRolls from local storage
    cartArrayObject = JSON.parse(cartArrayString); //JSON --> object
    cartCount.innerText = cartArrayObject.length; //update the cart rolls numbers
}

updateBadge();


