class ShoppingCart {

     constructor() {
        this.items = [];
        this.coupons = [];
        this.taxRate = 0; // Default tax rate
        this.shippingCost = 0; // Default shipping cost
    }

    addItem(item, quantity = 1) {
        if (!item || typeof item !== 'object' || !('name' in item) || !('price' in item) || isNaN(item.price) || item.price <= 0 || !Number.isInteger(quantity) || quantity <= 0) {
            throw new Error('Invalid item or quantity');
        }

        for (let i = 0; i < quantity; i++) {
            this.items.push(item);
        }
    }

    removeItem(index) {
        if (index < 0 || index >= this.items.length) {
            throw new Error('Invalid index');
        }

        this.items.splice(index, 1);
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

}


module.exports = ShoppingCart;

