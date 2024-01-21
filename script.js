let cartCount = 0;

function addToCart(productName, price) {
    const cartItems = document.getElementById('cart-items');
    const cartCountElement = document.getElementById('cart-count');

    const cartItem = document.createElement('li');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `

    `;

    // Update cart count
    cartCount++;
    cartCountElement.textContent = cartCount;
}
