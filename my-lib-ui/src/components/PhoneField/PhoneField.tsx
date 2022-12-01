import React, { useState } from 'react';
import './phoneField.css';
import '../Input/input.css'

export interface PhoneFieldProps {
    label: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    validator?: string;
}

const PhoneField = (props: PhoneFieldProps) => {

    const [showError, setShowError] = useState<boolean>(false);
    const [valid, setValid] = useState<boolean>(false);
    function handleChange(e: React.ChangeEvent<HTMLInputElement>, callback: void) {
        console.log('handleChange', e.target.value);
        setTimeout(() => {
            if (/^((\+)33|0)[1-9](\d{2}){4}$/i.test(e.target.value)) {
                callback;
                setValid(true);
                setShowError(false);
            } else {
                setValid(false);
                setShowError(true);
            }
        }, 1000);
    }

    return (
        <div>
            <div className='input-field-container'>
                <p>{props.label}</p>
                <input onChange={(e) => handleChange(e, props.onChange(e))} value={props.value} type='tel' placeholder={props.placeholder || ''} />
                <div className='line' style={{ backgroundColor: 'red' }}></div>

            </div>
            {showError && <p className='error'>Numéro de téléphone non valide</p>}
        </div>
    );
};

export default PhoneField;