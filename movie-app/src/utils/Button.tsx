import React from "react";

export default function Button(props: buttonProps) {
    return <button
        type={props.type}
        onClick={props.onClick}
        className={props.class}
        disabled={props.disabled}
    >{props.children}</button>

};

interface buttonProps {
    children: React.ReactNode
    class: string;

    onClick?(): void;

    type: 'button' | 'submit';

    disabled?: boolean;
}

Button.defaultProps = {
    type: 'button',
    disabled: false
}