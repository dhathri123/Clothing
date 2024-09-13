document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.closest('.product');
            const id = product.getAttribute('data-id');
            const name = product.querySelector('h2').textContent;
            const price = parseFloat(product.querySelector('p').textContent.replace('$', ''));

            const cartItem = cart.find(item => item.id === id);

            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                cart.push({
                    id,
                    name,
                    price,
                    quantity: 1
                });
            }

            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
            cartItems.innerHTML += `
                <li>${item.name} - $${item.price} x ${item.quantity}</li>
            `;
        });

        cartTotal.textContent = total.toFixed(2);
        cartCount.textContent = cart.length;
    }
});
