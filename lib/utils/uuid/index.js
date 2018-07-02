function random() {
    // tslint:disable-next-line:no-bitwise
    var randomNumber = (Math.random() * 46656) | 0;
    return "000" + randomNumber.toString(36);
}
export function uuid() {
    return "" + random().slice(-3) + random().slice(-3);
}
//# sourceMappingURL=index.js.map