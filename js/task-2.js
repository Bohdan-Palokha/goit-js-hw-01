getShippingMessage = (country, price, deliveryFee)
country = "Ukraine"
price = 100
deliveryFee = 50
const totalPrice = (price + deliveryFee)
const massage = `Shipping to ${country} will cost ${totalPrice} credits`