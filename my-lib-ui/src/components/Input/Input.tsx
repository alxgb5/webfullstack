import React from 'react';
import './input.css';

export interface InputFieldProps {
    label: string;
    placeholder: string;

    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

    value: string;
}


const InputField = (props: InputFieldProps) => {
    return (
        <div>
            <p>{props.label}</p>
            <input type={'text'} value={props.value} placeholder={props.placeholder || ''} onChange={(event) => { props.onChange(event); }} />
        </div>
    );
};

export default InputField;