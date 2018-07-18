var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
export var isObject = function (collection) {
    return typeof collection === 'object' && collection !== null;
};
export var merge = function (collection, other) {
    if (!isObject(collection) && isObject(other)) {
        return other;
    }
    if (isObject(collection) && !isObject(other)) {
        return collection;
    }
    return Object.entries(other).reduce(function (result, _a) {
        var key = _a[0], value = _a[1];
        var _b;
        return Object.assign(result, (_b = {}, _b[key] = value, _b));
    }, __assign({}, collection));
};
export var mergeAll = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (!Array.isArray(args)) {
        return {};
    }
    return args.reduce(function (result, acc) { return merge(result, acc); }, {});
};
//# sourceMappingURL=merge.js.map