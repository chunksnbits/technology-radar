"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function random() {
    // tslint:disable-next-line:no-bitwise
    var randomNumber = (Math.random() * 46656) | 0;
    return "000" + randomNumber.toString(36);
}
function uuid() {
    return "" + random().slice(-3) + random().slice(-3);
}
exports.uuid = uuid;
//# sourceMappingURL=index.js.map