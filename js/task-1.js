
function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    const alert = `You ordered ${quantity} droids worth ${totalPrice} credits!`

    return alert;
}

console.log(makeTransaction(10, 100));
