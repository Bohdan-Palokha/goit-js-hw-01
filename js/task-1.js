
function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    alert = `You ordered ${quantity} droids worth ${totalPrice} credits!`

    return totalPrice;
}

console.log(makeTransaction(10, 100));

console.log(alert)