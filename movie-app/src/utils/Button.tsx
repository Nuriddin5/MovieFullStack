import React from "react";

export default function Button(props: buttonProps) {
    return <button className={props.class}>{props.children}</button>

};

interface buttonProps {
    children: React.ReactNode
    class: string
}