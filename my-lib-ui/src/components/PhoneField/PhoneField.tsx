import React from 'react';
import './phoneField.css';

export interface PhoneFieldProps {
    label: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    validator?: string;
}

const PhoneField = (props: PhoneFieldProps) => {
    return (
        <div className='input-field-container'>
            <p>{props.label}</p>
            <input onChange={props.onChange} value={props.value} type={'tel'} placeholder={props.placeholder || ''} pattern={props.validator} />
            <div className='line'></div>
        </div>
    );
};

export default PhoneField;