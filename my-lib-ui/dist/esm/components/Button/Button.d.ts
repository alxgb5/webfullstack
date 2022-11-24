/// <reference types="react" />
import "../../assets/main.css";
import './Button.css';
export interface ButtonProps {
    label: string;
    onClick(): any;
    appearance?: 'flat' | 'outline';
    color?: 'primary' | 'secondary' | 'warning' | 'success' | 'danger';
    size?: 's' | 'm' | 'l';
    disabled?: boolean;
}
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
