import { PureComponent } from 'react';
import './styles.scss';
export interface AppProps {
    className?: string;
    editMode?: boolean;
    selectedTechnology?: Technology;
    viewMode?: ViewMode;
    editor?: boolean;
    updateBreakpoint?: (width: number, height: number) => void;
    selectTechnology?: (technology: Technology) => void;
    setEditMode?: (value: boolean) => void;
}
export declare class App extends PureComponent<AppProps> {
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private windowResizeHandler;
    private technologyDetailsClosedHandler;
}
