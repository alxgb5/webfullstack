import React from 'react';
import './radio.css';

export interface RadioFieldProps {
    label: string;
    radios: { label: string, value: string, checked: boolean }[];
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const RadioField = (props: RadioFieldProps) => {
    return (
        <fieldset>
            <legend>{props.label}</legend>
            {
                props.radios !== undefined && props.radios.length > 0 ?
                    props.radios.map((radio, index) => {
                        return (
                            <div className="radio-container" key={index}>
                                <input type="radio" id={radio.label} name={radio.label} value={radio.value} checked={radio.checked} />
                                <label htmlFor={radio.label}>{radio.label}</label>
                            </div>
                        );
                    })
                    :
                    <p>Aucune proposition</p>
            }
        </fieldset>
    );
};

export default RadioField;