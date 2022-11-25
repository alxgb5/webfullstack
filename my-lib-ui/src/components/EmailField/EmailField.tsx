import React, { useState } from 'react';
import '../Input/input.css';

export interface EmailFieldProps {
    label: string;
    placeholder?: string;

    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

    value: string;
}


const EmailField = (props: EmailFieldProps) => {
    return (
        <div className='input-field-container'>
            <p>{props.label}</p>
            <input name={'email'} type={'email'} placeholder={props.placeholder || ''} value={props.value} onChange={(e) => { props.onChange(e); }} />
            <div className='line'></div>
        </div>
    );
};

export default EmailField;