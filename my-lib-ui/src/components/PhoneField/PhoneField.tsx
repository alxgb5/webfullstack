import React, { useState } from 'react';
import './phoneField.css';

export interface PhoneFieldProps {
    label: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    validator?: string;
}

const PhoneField = (props: PhoneFieldProps) => {

    const [showError, setShowError] = useState<boolean>(false);
    function handleChange(e: React.ChangeEvent<HTMLInputElement>, callback: void) {
        setTimeout(() => {
            if (/^((\+)33|0)[1-9](\d{2}){4}$/i.test(e.target.value)) {
                callback;
            } else {
                setShowError(true);
            }
        }, 1500);
    }

    return (
        <div className='input-field-container'>
            <p>{props.label}</p>
            <input onChange={(e) => handleChange(e, props.onChange(e))} value={props.value} type={'tel'} placeholder={props.placeholder || ''} />
            <div className='line'></div>
        </div>
    );
};

export default PhoneField;