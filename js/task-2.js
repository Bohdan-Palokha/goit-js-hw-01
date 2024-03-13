function makeTransaction(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    alert = `Shipping to ${country} will cost ${totalPrice} credits`;

    return totalPrice
};

console.log(makeTransaction("Ukraine", 100, 50));

console.log(alert);