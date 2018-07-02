import { MouseEventHandler, PureComponent, RefObject } from 'react';
import './styles.scss';
export interface TechnologyListEntryProps {
    className?: string;
    technology: Technology;
    group: Group;
    focused: boolean;
    focusable: boolean;
    onMouseOver: MouseEventHandler<void>;
    onMouseOut: MouseEventHandler<void>;
    onClick: MouseEventHandler<void>;
}
export declare class TechnologyListEntry extends PureComponent<TechnologyListEntryProps> {
    elementRef: RefObject<HTMLLIElement>;
    constructor(props: any);
    componentDidUpdate(): void;
    render(): JSX.Element;
}
