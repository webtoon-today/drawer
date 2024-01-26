import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { NestedCascadeDrawer, PortalDrawer } from '@webtoontoday/drawer';

function App() {

    const [open, setOpen] = useState(false);

    const [nestedOpen, setNestedOpen] = useState(false);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <button onClick={()=>{setOpen(true)}}>
                    {"드로어 열기"}
                </button>
                <PortalDrawer
                    isClient={true}
                    open={open} onClose={()=>{
                    setOpen(false);
                    }}
                >
                    <div>{"Hello, world!"}</div>
                    <button
                        onClick={()=>{setNestedOpen(true)}}
                    >{"다음 드로어 열기"}</button>
                    <NestedCascadeDrawer
                        open={nestedOpen} onClose={()=>{setNestedOpen(false)}}
                    >
                        {"Hello, world!2"}
                    </NestedCascadeDrawer>

                </PortalDrawer>
            </header>
        </div>
    );
}

export default App;
