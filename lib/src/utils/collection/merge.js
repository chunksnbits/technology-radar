"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = function (collection) {
    return typeof collection === 'object' && collection !== null;
};
exports.merge = function (collection, other) {
    if (!exports.isObject(collection) && exports.isObject(other)) {
        return other;
    }
    if (exports.isObject(collection) && !exports.isObject(other)) {
        return collection;
    }
    return Object.entries(other).reduce(function (result, _a) {
        var key = _a[0], value = _a[1];
        var _b;
        return Object.assign(result, (_b = {}, _b[key] = value, _b));
    }, __assign({}, collection));
};
exports.mergeAll = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!Array.isArray(args)) {
        return {};
    }
    return args.reduce(function (result, acc) { return exports.merge(result, acc); }, {});
};
//# sourceMappingURL=merge.js.map