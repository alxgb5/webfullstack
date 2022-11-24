import React from "react";
import './UIButton.css';

export interface UIButtonProps {
    label: string;
    onClick?: () => void;
}

const UIButton = (props: UIButtonProps) => {
    return <button onClick={props.onClick}>{props.label}</button>;
};

export default UIButton;