import React from "react";
import './UIButton.css';

export interface UIButtonProps {
    label: string;
    onClick?: () => void;
    color?: 'primary' | 'light' | 'dark';

    className?: string;
}

const UIButton = (props: UIButtonProps) => {
    if (props.color == null)
        props.color = 'primary';
    return <button onClick={props.onClick} className={'ui-btn ' + props.color + ' ' + props.className}>{props.label}</button>;
};

export default UIButton;