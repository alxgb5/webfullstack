import React, { useState } from 'react';
import '../Input/input.css';

export interface PasswordFieldProps {
    label: string;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const PasswordField = (props: PasswordFieldProps) => {
    const [showError, setShowError] = useState<boolean>(false);

    return (
        <div>
            <div className='input-field-container'>
                <p>{props.label}</p>
                <input name={'password'} type={'password'} placeholder={props.placeholder || ''} value={props.value} onChange={(e) => { props.onChange(e); }} />
                <div className='line'></div>
            </div>
            {
                showError ? <p className='error'>Le format d'email est incorrect.</p> : <></>
            }
        </div>
    );
};

export default PasswordField;