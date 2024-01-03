'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

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


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

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

var css_248z = ".BackgroundScreen {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(36, 42, 48, 0.6);\n  transition: 2s ease;\n  z-index: 1;\n}\n.BackgroundScreen.DrawerOn {\n  opacity: 1;\n}\n.BackgroundScreen.DrawerOff {\n  animation-name: background-out;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n}\n.BackgroundScreen.DrawerOff .CascadeDrawer {\n  animation-name: modal-out-web;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n}\n.BackgroundScreen .CascadeDrawer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 520px;\n  height: 100%;\n  border: none;\n  background-color: white;\n  transition: 0.5s ease;\n  animation-name: modal-in-web;\n  animation-duration: 0.5s;\n}\n@media (max-width: 700px) {\n  .BackgroundScreen .CascadeDrawer {\n    top: initial;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 80%;\n    border-radius: 20px 20px 0 0;\n    overflow: hidden;\n  }\n}\n@media (min-width: 700px) {\n  .BackgroundScreen .CascadeDrawer[data-depth=\"0\"] {\n    padding-right: 0px;\n  }\n  .BackgroundScreen .CascadeDrawer[data-depth=\"1\"] {\n    padding-right: 20px;\n  }\n  .BackgroundScreen .CascadeDrawer[data-depth=\"2\"] {\n    padding-right: 40px;\n  }\n  .BackgroundScreen .CascadeDrawer[data-depth=\"3\"] {\n    padding-right: 60px;\n  }\n  .BackgroundScreen .CascadeDrawer[data-depth=\"4\"] {\n    padding-right: 80px;\n  }\n  .BackgroundScreen .CascadeDrawer[data-depth=\"5\"] {\n    padding-right: 100px;\n  }\n  .BackgroundScreen .CascadeDrawer[data-depth=\"6\"] {\n    padding-right: 120px;\n  }\n  .BackgroundScreen .CascadeDrawer[data-depth=\"7\"] {\n    padding-right: 140px;\n  }\n  .BackgroundScreen .CascadeDrawer[data-depth=\"8\"] {\n    padding-right: 160px;\n  }\n  .BackgroundScreen .CascadeDrawer[data-depth=\"9\"] {\n    padding-right: 180px;\n  }\n}\n@media (max-width: 700px) {\n  .BackgroundScreen .CascadeDrawer[data-depth=\"0\"] {\n    padding-bottom: 0px;\n  }\n  .BackgroundScreen .CascadeDrawer[data-depth=\"1\"] {\n    padding-bottom: 20px;\n  }\n  .BackgroundScreen .CascadeDrawer[data-depth=\"2\"] {\n    padding-bottom: 40px;\n  }\n  .BackgroundScreen .CascadeDrawer[data-depth=\"3\"] {\n    padding-bottom: 60px;\n  }\n  .BackgroundScreen .CascadeDrawer[data-depth=\"4\"] {\n    padding-bottom: 80px;\n  }\n  .BackgroundScreen .CascadeDrawer[data-depth=\"5\"] {\n    padding-bottom: 100px;\n  }\n  .BackgroundScreen .CascadeDrawer[data-depth=\"6\"] {\n    padding-bottom: 120px;\n  }\n  .BackgroundScreen .CascadeDrawer[data-depth=\"7\"] {\n    padding-bottom: 140px;\n  }\n  .BackgroundScreen .CascadeDrawer[data-depth=\"8\"] {\n    padding-bottom: 160px;\n  }\n  .BackgroundScreen .CascadeDrawer[data-depth=\"9\"] {\n    padding-bottom: 180px;\n  }\n}\n@media (max-width: 700px) {\n  .BackgroundScreen .CascadeDrawer {\n    animation-name: modal-in-mobile;\n  }\n}\n.BackgroundScreen .CascadeDrawer .DrawerInner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  border: none;\n  border-radius: inherit;\n}\n@keyframes background-out {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes modal-out-web {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(100%);\n  }\n}\n@keyframes modal-in-web {\n  from {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@keyframes modal-out-mobile {\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(100%);\n  }\n}\n@keyframes modal-in-mobile {\n  from {\n    transform: translateY(100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}";
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

const NestedCascadeDrawer = ({ children, open, onClose: givenOnClose, hasModal = false, className, style, }) => {
    const ref = react.useRef(null);
    const [depth, setDepth] = react.useState(0);
    const [isNesting, setIsNesting] = react.useState(false);
    const { isRender, onTransitionEnd, isAnimating } = UseAnimation(open);
    react.useEffect(() => {
        if (ref === null || ref === void 0 ? void 0 : ref.current) {
            const calculatedDepth = (ref === null || ref === void 0 ? void 0 : ref.current.querySelectorAll('.CascadeDrawer').length) - 1;
            setDepth(calculatedDepth < 0 ? 0 : calculatedDepth);
        }
    }, [children]);
    const setNesting = (e) => {
        setIsNesting(true);
        if (!hasModal) {
            let parent = e.currentTarget;
            if (!parent)
                return;
            while (parent !== document.body) {
                if (parent === null || parent === void 0 ? void 0 : parent.classList.contains('CascadeDrawer')) {
                    parent === null || parent === void 0 ? void 0 : parent.setAttribute('data-depth', `${(parent === null || parent === void 0 ? void 0 : parent.querySelectorAll('.CascadeDrawer').length) - 1 || 0}`);
                }
                if (parent === null || parent === void 0 ? void 0 : parent.parentElement) {
                    parent = parent === null || parent === void 0 ? void 0 : parent.parentElement;
                }
            }
        }
        setIsNesting(false);
    };
    if (!isRender) {
        return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    }
    return (jsxRuntime.jsx("div", { className: `BackgroundScreen ${className} ${isAnimating ? "DrawerOn" : "DrawerOff"}`, onTransitionEnd: onTransitionEnd, onAnimationEnd: onTransitionEnd, ref: ref, onClick: (e) => __awaiter(void 0, void 0, void 0, function* () {
            if (isNesting)
                return;
            setNesting(e);
            givenOnClose();
        }), children: jsxRuntime.jsx("div", { className: `CascadeDrawer`, "data-depth": depth, onClick: (e) => {
                e.stopPropagation();
            }, children: jsxRuntime.jsx("div", { className: 'DrawerInner', children: children }) }) }));
};

exports.NestedCascadeDrawer = NestedCascadeDrawer;
