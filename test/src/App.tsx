import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { NestedCascadeDrawer, PortalDrawer } from '@webtoontoday/drawer';

function App() {

    const [open, setOpen] = useState(false);

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

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
                        onClick={()=>{setOpen1(true)}}
                    >{"다음 드로어 열기"}</button>
                    <NestedCascadeDrawer
                        open={open1} onClose={()=>{setOpen1(false)}}
                    >
                        {"Hello, world!2"}
                        <button
                            onClick={()=>{setOpen2(true)}}
                        >{"다음 드로어 열기"}</button>
                        <NestedCascadeDrawer
                            open={open2} onClose={()=>{setOpen2(false)}}
                        >
                            {"Hello, world!3"}
                            <button
                                onClick={()=>{setOpen3(true)}}
                            >{"다음 드로어 열기"}</button>
                            <NestedCascadeDrawer
                                open={open3} onClose={()=>{setOpen3(false)}}
                            >
                                {"Hello, world!4"}
                            </NestedCascadeDrawer>
                        </NestedCascadeDrawer>
                    </NestedCascadeDrawer>

                </PortalDrawer>
            </header>
        </div>
    );
}

export default App;
