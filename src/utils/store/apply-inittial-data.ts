
// ----------------------------------------------------------------------------- Dependencies
import { set } from 'mobx';

// ----------------------------------------------------------------------------- Configuration
type Reaction = (data: any) => any;

interface Reactions {
  [key: string]: Reaction;
}

// ----------------------------------------------------------------------------- Implementation
export function applyInitialData<T>(context: T, data: any = {}, reactions: Reactions = {}): T {
  Object.entries(data).forEach(([key, value]) => {
    if (!Object(context).hasOwnProperty(key)) {
      return;
    }

    const reaction = reactions[key];

    if (typeof reaction === 'function') {
      return set(context, key, reaction(value));
    }

    set(context, key, value);
  });


  return context;
}
