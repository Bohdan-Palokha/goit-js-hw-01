function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    const alert = `Shipping to ${country} will cost ${totalPrice} credits`;

    return alert;
};

console.log(getShippingMessage("Ukraine", 100, 50));
