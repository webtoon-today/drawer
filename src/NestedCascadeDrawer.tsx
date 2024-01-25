import React, { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

import './NestedCascadeDrawer.scss';
import UseAnimation from "./UseAnimation";

export type nestedDrawerPropsType = {
    children: ReactNode,
    open: boolean, onClose: Function,
    hasModal?: boolean,
    className?: string,
    style?:CSSProperties,
}

export const NestedCascadeDrawer = ({ 
    children, open, onClose: givenOnClose, hasModal=false, className, style,
}: nestedDrawerPropsType) => {
    const ref = useRef<HTMLDivElement>(null);

    const [ depth, setDepth ] = useState<number>(0);
    const [ isUpdating, setIsUpdating ] = useState<boolean>(false);
    const { isRender, onTransitionEnd, isAnimating } = UseAnimation(open);

    useEffect(() => {
        if ( ref?.current ) {   
            const calculatedDepth = ref?.current.querySelectorAll('.CascadeDrawer').length - 1
            setDepth( calculatedDepth < 0 ? 0 : calculatedDepth );
        }
    },[children])

    useEffect(() => {
        if ( !ref?.current ) return;
        
        if ( !hasModal ) {
            let parent = ref?.current as HTMLElement;
            while ( parent !== document.body ) {
                if ( parent?.classList.contains('CascadeDrawer')) {
                    parent?.setAttribute('data-depth', `${parent?.querySelectorAll(".CascadeDrawer").length - 1 || 0}`)
                }

                if ( parent?.parentElement ) {
                    parent = parent?.parentElement;
                }
            }
        }
    },[hasModal, open])

    useEffect(() => {
        if ( isUpdating ) {
            givenOnClose();
            setIsUpdating(false);
        }
    },[isUpdating, isAnimating, givenOnClose])
    
    if (!isRender) {
        return <></>;
    }
    
    return (
    <div 
        className={`BackgroundScreen ${className} ${isAnimating?"DrawerOn":"DrawerOff"}`} 
        onTransitionEnd={onTransitionEnd} 
        onAnimationEnd={onTransitionEnd} 
        ref={ref} 
        onClick={ async (e) => {
            setIsUpdating(true);
        }}  
    >
            <div className={`CascadeDrawer`}
                {...{"data-depth": depth}}
                onClick={(e)=>{
                    e.stopPropagation();
                }}
            >
                <div className={'DrawerInner'}>
                    {children}
                </div>
            </div>
        </div>)
}
