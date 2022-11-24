/// <reference types="react" />
import './Spinner.css';
import "../../assets/main.css";
export interface SpinnerProps {
    show: boolean;
    size?: 's' | 'm';
    type?: 'ring' | 'bubble';
}
declare const Spinner: (props: SpinnerProps) => JSX.Element | null;
export default Spinner;
