import React, { useState } from 'react';
import '../Input/input.css';

export interface EmailFieldProps {
    label: string;
    placeholder?: string;

    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

    value: string;
}

const EmailField = (props: EmailFieldProps) => {
    const [showError, setShowError] = useState<boolean>(false);
    function handleChange(e: React.ChangeEvent<HTMLInputElement>, callback: (event: React.ChangeEvent<HTMLInputElement>) => void) {
        setTimeout(() => {
            if (/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(e.target.value)) {
                callback;
            } else {
                setShowError(true);
            }
        }, 1500);
    }

    return (
        <div>
            <div className='input-field-container'>
                <p>{props.label}</p>
                <input name={'email'} type={'email'} placeholder={props.placeholder || ''} value={props.value} onChange={(e) => { handleChange(e, props.onChange(e)); }} />
                <div className='line'></div>
            </div>
            {
                showError ? <p className='error'>Le format d'email est incorrect.</p> : <></>
            }
        </div>
    );
};

export default EmailField;