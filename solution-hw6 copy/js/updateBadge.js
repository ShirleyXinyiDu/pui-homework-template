function updateBadge() {
    const cartCount = document.querySelector('p.cart-badge');
    console.log(cartCount);
    console.log(cartArray.length);
    cartCount.innerText = cartArray.length;
}

updateBadge();