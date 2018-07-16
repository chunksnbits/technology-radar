export declare function transitionDefault(...names: Array<string | Partial<CssTransitionProperties>>): {
    transition: string;
};
export declare function transitionFaster(...names: string[]): {
    transition: string;
};
export declare function animationDefault(name: string, options?: CssAnimationProperties): {
    animation: string;
};
