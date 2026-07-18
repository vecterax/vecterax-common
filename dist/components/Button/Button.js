import { jsx as _jsx } from "react/jsx-runtime";
export function Button({ children, onClick }) {
    return (_jsx("button", { onClick: onClick, children: children }));
}
