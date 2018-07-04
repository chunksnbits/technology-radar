
// ----------------------------------------------------------------------------- Configuration
const transitionDurationDefault = '0.25s';
const transitionTimingDefault = 'ease';
const transitionDelayDefault = '0s';

const animationDurationDefault ='0.45s';
const animationTimingDefault ='linear';
const animationDelayDefault ='0s';

const transitionDurationFaster = '0.1s';

const transitionDefaults: CssTransitionProperties = {
  duration: transitionDurationDefault,
  timing: transitionTimingDefault,
  delay: transitionDelayDefault,
};

const transitionDefaultsFaster: CssTransitionProperties = {
  duration: transitionDurationFaster,
};

const animationDefaults: CssAnimationProperties = {
  duration: animationDurationDefault,
  timing: animationTimingDefault,
  delay: animationDelayDefault,
  iterationCount: 1,
  direction: 'normal',
  fillMode: 'both',
};

// ----------------------------------------------------------------------------- Helpers methods
function createTransition(name: string, options: CssTransitionProperties = transitionDefaults) {
  const merged = Object.assign({}, transitionDefaults, options);
  const { duration, timing, delay } = merged;

  return [
    name,
    duration,
    timing,
    delay,
  ].join(' ');
}

// ----------------------------------------------------------------------------- Implementation
export function transitionDefault(...names: string[]) {
  const options = typeof names[names.length - 1] === 'object' ? names.pop() : transitionDefaults;

  return {
    transition: names.map(name => createTransition(name, options as CssTransitionProperties)).join(', '),
  };
}

export function transitionFaster(...names: string[]) {
  const options = typeof names[names.length - 1] === 'object' ? names.pop() : transitionDefaults;
  const merged = Object.assign({}, transitionDefaultsFaster, options);

  return transitionDefault(...names.concat(merged as any));
}

export function animationDefault(name: string, options: CssAnimationProperties = animationDefaults) {
  const merged = Object.assign({}, animationDefaults, options);

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
