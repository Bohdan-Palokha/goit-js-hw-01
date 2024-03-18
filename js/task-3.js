function getElementWidth(content, padding, border) {
    const total = (content + (padding * 2) + (border * 2));
    const alert = `${total}px`;

    return alert;
};
console.log(getElementWidth(50, 5, 2));
