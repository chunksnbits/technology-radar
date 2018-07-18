import { PureComponent } from 'react';
import { Classes } from 'jss';
export interface MainViewProps {
    className?: string;
    classes?: Classes;
    editor?: boolean;
    selectedTechnology?: Technology;
    viewMode?: ViewMode;
    selectTechnology?: (technology: Technology) => void;
}
export declare class MainView extends PureComponent<MainViewProps> {
    render(): JSX.Element;
    private technologyDetailsClosedHandler;
}
