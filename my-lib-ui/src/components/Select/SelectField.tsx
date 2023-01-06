import React, { useState } from 'react';
import './select.css';
export interface SelectFieldProps {
    label: string;
    placeholder?: string;
    value?: string;
    options: string[];
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField = (props: SelectFieldProps) => {
    // const [showOptions, setShowOptions] = useState<boolean>(false);
    // const [selectedValue, setSelectedValue] = useState<string>('');
    return (
        <div className='select-container'>
            <div className='select-field-container'>
                <p className='select-field-label'>{props.label}</p>
                <select className='select-field' onChange={(e) => props.onChange(e)} >
                    <option selected value="">{props.placeholder || 'Selectionnez une valeur'}</option>
                    {
                        props.options.map((option, index) => {
                            return <option key={index} value={option}>{option}</option>;
                        })
                    }
                </select>
            </div>
            {/* {
                showOptions ?
                    <div className='options-container'>
                        <div className='options'>
                            {props.options?.map((x) => {
                                return <button onClick={() => { setSelectedValue(x); setShowOptions(!showOptions); }} className='option-button' key={x}>{x}</button>;
                            })}
                        </div>
                    </div>
                    : <></>
            }
            {selectedValue} */}
        </div>
    );
};

export default SelectField;