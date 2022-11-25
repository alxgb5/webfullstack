import React, { useState } from 'react';
import './select.css';
export interface SelectFieldProps {
    label: string;
    placeholder?: string;
    value?: string;
    options?: string[];
    disabled?: boolean;
    onValueSelected?: (e: string) => void;
}

const SelectField = (props: SelectFieldProps) => {
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string>('');
    return (
        <div className='select-container'>
            <div className='select-field-container' onClick={(e) => { console.log(e); setShowOptions(!showOptions); }}>
                <p className='select-field-label'>{props.label}</p>
                <select className='select-field' value={selectedValue} onChange={() => { }}>
                    <option value={selectedValue} disabled selected hidden>{selectedValue ? selectedValue : (props.placeholder || 'Selectionnez une valeur')}</option>
                </select>
            </div>
            {
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
            {selectedValue}
        </div>
    );
};

export default SelectField;