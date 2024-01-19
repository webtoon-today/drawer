import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, CSSProperties } from 'react';

type nestedDrawerPropsType = {
    children: ReactNode;
    open: boolean;
    onClose: Function;
    hasModal?: boolean;
    className?: string;
    style?: CSSProperties;
};
declare const NestedCascadeDrawer: (props: nestedDrawerPropsType) => react_jsx_runtime.JSX.Element;

declare const PortalDrawer: (props: nestedDrawerPropsType & {isClient: boolean} ) => react_jsx_runtime.JSX.Element;

export { NestedCascadeDrawer, PortalDrawer, type nestedDrawerPropsType };
