import React from "react";

export default function Button(props: buttonProps) {
    return <button type={props.type} onClick={props.onClick} className={props.class}>{props.children}</button>

};

interface buttonProps {
    children: React.ReactNode
    class: string;

    onClick?(): void;

    type: 'button' | 'submit';
}

Button.defaultProps = {
    type: 'button'
}