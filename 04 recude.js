const cart = [
    { product: "Keyboard", price: 49.99, quantity: 2 },
    { product: "Mouse", price: 24.50, quantity: 1 },
    { product: "Monitor", price: 179.99, quantity: 2 },
    { product: "USB Cable", price: 8.99, quantity: 3 }
];

const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

console.log(`shopping cart total: ${total.toFixed(2)}`);    