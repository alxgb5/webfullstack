import React from "react";
import "../../assets/main.css";
import './Button.css';

export interface ButtonProps {
    label: string;
    onClick(): any;
    appearance?: 'flat' | 'outline';
    color?: 'primary' | 'secondary' | 'warning' | 'success' | 'danger';
    size?: 's' | 'm' | 'l';
    disabled?: boolean;
}

const Button = (props: ButtonProps) => {
    if (props.appearance === 'flat')
        return <button className={'flat-button ' + (props.color ?? 'primary') + ' ' + (props.size ?? 'm') + ' ' + (props.disabled ? 'disabled' : '')} onClick={props.onClick} disabled={props.disabled ?? false}>{props.label}</button>;
    if (props.appearance === 'outline')
        return <button className={'outline-button ' + (props.color ?? 'primary') + ' ' + (props.size ?? 'm') + ' ' + (props.disabled ? 'disabled' : '')} onClick={props.onClick} disabled={props.disabled ?? false}>{props.label}</button>;

    return <button className={'flat-button ' + (props.color ?? 'primary') + ' ' + (props.size ?? 'm') + ' ' + (props.disabled ? 'disabled' : '')} onClick={props.onClick} disabled={props.disabled ?? false}>{props.label}</button>;
};

export default Button;