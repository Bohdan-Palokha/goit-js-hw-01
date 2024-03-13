function makeTransaction(content, padding, border) {
    const total = (content + (padding * 2) + (border * 2));

    alert = `${total}px`;

    return total;
};
console.log(makeTransaction(50, 5, 2));

console.log(alert);