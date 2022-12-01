import React, { useState } from 'react';
import './radio.css';

export interface RadioFieldProps {
    titre: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const RadioField = (props: RadioFieldProps) => {

    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(false);

    return (
        <div>
            <p>{props.titre}</p>
            <div className='row-container'>
                <div className="radio-container">
                    <input onChange={(e) => { setChecked1(!checked1); setChecked2(!checked2); props.onChange(e) }} type="radio" id="particulier" name="particulier" value="particulier" checked={checked1} />
                    <label htmlFor="particulier">Un particulier</label>
                </div>
                <div className="radio-container">
                    <input onChange={(e) => { setChecked2(!checked2); setChecked1(!checked1); props.onChange(e) }} type="radio" id="entreprise" name="entreprise" value="entreprise" checked={checked2} />
                    <label htmlFor="entreprise">Une entreprise</label>
                </div>
            </div>
        </div>
    );
};

export default RadioField;