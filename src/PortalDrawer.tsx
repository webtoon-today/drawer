import React from "react";
import { NestedCascadeDrawer } from "./NestedCascadeDrawer";
import { createPortal } from 'react-dom';

export const PortalDrawer = ( isClient: boolean, ...props: any ) => {

    if ( !isClient ) {
        return <></>;
    } 
    
    return(
        createPortal(
            <NestedCascadeDrawer {...props} />, 
            document.body
        )
    )
}