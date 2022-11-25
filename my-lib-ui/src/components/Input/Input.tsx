import React from 'react';
import './input.css';

export interface InputFieldProps {
    label: string;
    placeholder?: string;

    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    value?: string;
}


const InputField = (props: InputFieldProps) => {
    return (
        <div className='input-field-container'>
            <p>{props.label}</p>
            <input type={'text'} placeholder={props.placeholder || ''} />
            <div className='line'></div>
        </div>
    );
};

export default InputField;