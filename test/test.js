// test.js
const ShoppingCart = require('../src/shoppingCart');

test('Add item to shopping cart', () => {
    const cart = new ShoppingCart();
    cart.addItem({ name: 'Item 1', price: 10 });
    expect(cart.items.length).toBe(1);
});

test('Remove item from shopping cart', () => {
    const cart = new ShoppingCart();
    cart.addItem({ name: 'Item 1', price: 10 });
    cart.removeItem(0);
    expect(cart.items.length).toBe(0);
});

test('Calculate total price of items in shopping cart', () => {
    const cart = new ShoppingCart();
    cart.addItem({ name: 'Item 1', price: 10 });
    cart.addItem({ name: 'Item 2', price: 20 });
    expect(cart.getTotalPrice()).toBe(30);
});