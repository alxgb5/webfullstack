import React from 'react';
import './checkbox.css';

export interface CheckboxFieldProps {
    label: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const CheckboxField = (props: CheckboxFieldProps) => {
    return (
        <div className="checkbox-container">
            <input type="checkbox" id={props.label} name={props.label} checked={props.checked} onChange={(e) => { props.onChange(e); }} />
            <label htmlFor={props.label}>{props.label}</label>
        </div>
    );
};

export default CheckboxField;