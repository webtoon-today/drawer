'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var reactDom = require('react-dom');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".BackgroundScreen{background-color:rgba(36,42,48,.6);height:100vh;left:0;position:fixed;top:0;transition:2s ease;width:100%;z-index:1}.BackgroundScreen.DrawerOff{animation-duration:.6s;animation-fill-mode:forwards;animation-name:background-out}.BackgroundScreen.DrawerOff .CascadeDrawer{animation-duration:.6s;animation-fill-mode:forwards;animation-name:modal-out-web}@media (max-width:700px){.BackgroundScreen.DrawerOff .CascadeDrawer{animation-name:modal-out-mobile}}.BackgroundScreen .CascadeDrawer{animation-duration:.5s;animation-name:modal-in-web;background-color:#fff;border:none;height:100%;position:absolute;right:0;top:0;transition:.5s ease;width:520px}@media (max-width:700px){.BackgroundScreen .CascadeDrawer{animation-name:modal-in-mobile;border-radius:20px 20px 0 0;bottom:0;height:80%;left:0;overflow:hidden;top:auto;width:100%}}@media (min-width:700px){.BackgroundScreen .CascadeDrawer[data-depth=\"0\"]{padding-right:0}.BackgroundScreen .CascadeDrawer[data-depth=\"1\"]{padding-right:20px}.BackgroundScreen .CascadeDrawer[data-depth=\"2\"]{padding-right:40px}.BackgroundScreen .CascadeDrawer[data-depth=\"3\"]{padding-right:60px}.BackgroundScreen .CascadeDrawer[data-depth=\"4\"]{padding-right:80px}.BackgroundScreen .CascadeDrawer[data-depth=\"5\"]{padding-right:100px}.BackgroundScreen .CascadeDrawer[data-depth=\"6\"]{padding-right:120px}.BackgroundScreen .CascadeDrawer[data-depth=\"7\"]{padding-right:140px}.BackgroundScreen .CascadeDrawer[data-depth=\"8\"]{padding-right:160px}.BackgroundScreen .CascadeDrawer[data-depth=\"9\"]{padding-right:180px}}@media (max-width:700px){.BackgroundScreen .CascadeDrawer[data-depth=\"0\"]{padding-bottom:0}.BackgroundScreen .CascadeDrawer[data-depth=\"1\"]{padding-bottom:20px}.BackgroundScreen .CascadeDrawer[data-depth=\"2\"]{padding-bottom:40px}.BackgroundScreen .CascadeDrawer[data-depth=\"3\"]{padding-bottom:60px}.BackgroundScreen .CascadeDrawer[data-depth=\"4\"]{padding-bottom:80px}.BackgroundScreen .CascadeDrawer[data-depth=\"5\"]{padding-bottom:100px}.BackgroundScreen .CascadeDrawer[data-depth=\"6\"]{padding-bottom:120px}.BackgroundScreen .CascadeDrawer[data-depth=\"7\"]{padding-bottom:140px}.BackgroundScreen .CascadeDrawer[data-depth=\"8\"]{padding-bottom:160px}.BackgroundScreen .CascadeDrawer[data-depth=\"9\"]{padding-bottom:180px}}.BackgroundScreen .CascadeDrawer .DrawerInner{border:none;border-radius:inherit;box-sizing:border-box;height:100%;position:relative;width:100%}@keyframes background-out{0%{background-color:rgba(36,42,48,.6)}to{background-color:rgba(36,42,48,0)}}@keyframes modal-out-web{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes modal-in-web{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes modal-out-mobile{0%{transform:translateY(0)}to{transform:translateY(100%)}}@keyframes modal-in-mobile{0%{transform:translateY(100%)}to{transform:translateY(0)}}";
styleInject(css_248z);

const UseAnimation = (condition) => {
    const [isComplete, setIsComplete] = react.useState(false);
    react.useEffect(() => {
        if (condition) {
            setIsComplete(true);
        }
    }, [condition]);
    const isRender = condition || isComplete;
    const isAnimating = condition && isComplete;
    const onTransitionEnd = () => {
        if (!condition) {
            setIsComplete(false);
        }
    };
    return ({ isRender, onTransitionEnd, isAnimating });
};

const NestedCascadeDrawer = ({ children, open, onClose: givenOnClose, hasModal = false, className = "", style, }) => {
    const ref = react.useRef(null);
    const [depth, setDepth] = react.useState(0);
    const { isRender, onTransitionEnd, isAnimating } = UseAnimation(open);
    react.useEffect(() => {
        const handleDrawerOpen = () => {
            var _a, _b, _c;
            const depth = (((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.DrawerOn > .CascadeDrawer')) || []).length;
            setDepth(depth);
            (_c = (_b = ref === null || ref === void 0 ? void 0 : ref.current) === null || _b === void 0 ? void 0 : _b.querySelector('.CascadeDrawer')) === null || _c === void 0 ? void 0 : _c.setAttribute('data-depth', `${depth}`);
            console.log("event received", depth);
        };
        window.addEventListener('drawerOpen', handleDrawerOpen);
        window.addEventListener('drawerClose', handleDrawerOpen);
        handleDrawerOpen();
        return () => {
            window.removeEventListener('drawerOpen', handleDrawerOpen);
            window.removeEventListener('drawerClose', handleDrawerOpen);
        };
    }, []);
    react.useEffect(() => {
        const drawerOpenEvent = new CustomEvent('drawerOpen');
        window.dispatchEvent(drawerOpenEvent);
    }, [open, isAnimating]);
    const handleClose = react.useCallback(() => {
        if (!(ref === null || ref === void 0 ? void 0 : ref.current)) {
            return;
        }
        if (hasModal) {
            return;
        }
        givenOnClose();
    }, [givenOnClose, hasModal, open]);
    if (!isRender) {
        return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    }
    return (jsxRuntime.jsx("div", { className: `BackgroundScreen ${className} ${isAnimating ? "DrawerOn" : "DrawerOff"}`, onTransitionEnd: onTransitionEnd, onAnimationEnd: onTransitionEnd, ref: ref, onClick: handleClose, children: jsxRuntime.jsx("div", { className: `CascadeDrawer`, "data-depth": depth, onClick: (e) => {
                e.stopPropagation();
            }, children: jsxRuntime.jsx("div", { className: 'DrawerInner', children: children }) }) }));
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const PortalDrawer = (_a) => {
    var { isClient } = _a, props = __rest(_a, ["isClient"]);
    if (!isClient) {
        return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    }
    return (reactDom.createPortal(jsxRuntime.jsx(NestedCascadeDrawer, Object.assign({}, props)), document.body));
};

exports.NestedCascadeDrawer = NestedCascadeDrawer;
exports.PortalDrawer = PortalDrawer;
