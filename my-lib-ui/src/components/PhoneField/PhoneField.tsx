import React from 'react';
import './input.css';

export interface PhoneFieldProps {
    label: string;
    placeholder?: string;

    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    value?: string;
}

const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    if (!value) return value;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}


const PhoneField = (props: PhoneFieldProps) => {
    return (
        <div className='input-field-container'>
            <p>{props.label}</p>
            <input onChange={props.onChange} type={'phone'} placeholder={props.placeholder || ''} />
            <div className='line'></div>
        </div>
    );
};

export default PhoneField;