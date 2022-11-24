import React from "react";
import './Spinner.css';
import "../../assets/main.css";


export interface SpinnerProps {
    show: boolean;
    size?: 's' | 'm';
    type?: 'ring' | 'bubble';
}

const Spinner = (props: SpinnerProps) => {
    if (props.show)
        return <div className={(props.type ?? 'ring') + ' ' + (props.size ?? 'm')}>
            <div></div><div></div><div></div><div></div>
        </div>;

    return null;
};

export default Spinner;