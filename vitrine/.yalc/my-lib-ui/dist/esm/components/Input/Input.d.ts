import React from 'react';
import './input.css';
export interface InputFieldProps {
    label: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}
declare const InputField: (props: InputFieldProps) => JSX.Element;
export default InputField;
