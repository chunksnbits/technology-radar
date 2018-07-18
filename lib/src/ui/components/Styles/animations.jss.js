// ----------------------------------------------------------------------------- Configuration
var transitionDurationDefault = '0.25s';
var transitionTimingDefault = 'ease';
var transitionDelayDefault = '0s';
var animationDurationDefault = '0.45s';
var animationTimingDefault = 'linear';
var animationDelayDefault = '0s';
var transitionDurationFaster = '0.1s';
var transitionDefaults = {
    duration: transitionDurationDefault,
    timing: transitionTimingDefault,
    delay: transitionDelayDefault,
};
var transitionDefaultsFaster = {
    duration: transitionDurationFaster,
};
var animationDefaults = {
    duration: animationDurationDefault,
    timing: animationTimingDefault,
    delay: animationDelayDefault,
    iterationCount: 1,
    direction: 'normal',
    fillMode: 'both',
};
// ----------------------------------------------------------------------------- Helpers methods
function createTransition(name, options) {
    if (options === void 0) { options = transitionDefaults; }
    var merged = Object.assign({}, transitionDefaults, options);
    var duration = merged.duration, timing = merged.timing, delay = merged.delay;
    return [
        name,
        duration,
        timing,
        delay,
    ].join(' ');
}
// ----------------------------------------------------------------------------- Implementation
export function transitionDefault() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    var options = typeof names[names.length - 1] === 'object' ? names.pop() : transitionDefaults;
    return {
        transition: names.map(function (name) { return createTransition(name, options); }).join(', '),
    };
}
export function transitionFaster() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    var options = typeof names[names.length - 1] === 'object' ? names.pop() : transitionDefaults;
    var merged = Object.assign({}, transitionDefaultsFaster, options);
    return transitionDefault.apply(void 0, names.concat(merged));
}
export function animationDefault(name, options) {
    if (options === void 0) { options = animationDefaults; }
    var merged = Object.assign({}, animationDefaults, options);
    return {
        animation: [
            name,
            merged.duration,
            merged.timing,
            merged.delay,
            merged.iterationCount,
            merged.direction,
            merged.fillMode,
        ].join(' '),
    };
}
//# sourceMappingURL=animations.jss.js.map