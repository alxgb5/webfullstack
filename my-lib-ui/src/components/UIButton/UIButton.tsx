import React from "react";
import './UIButton.css';

export interface UIButtonProps {
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    color?: 'primary' | 'light' | 'dark';
    className?: string;
    width?: string;
    height?: string;
    type: "button" | "reset" | "submit" | undefined;
}

const UIButton = (props: UIButtonProps) => {
    if (props.color == null)
        props.color = 'primary';
    return <button onClick={(e) => { props.onClick!(e); }} style={{ height: props.height || '', width: props.width || '' }} className={'ui-btn ' + props.color + ' ' + props.className} type={props.type}>{props.label}</button>;
};

export default UIButton;