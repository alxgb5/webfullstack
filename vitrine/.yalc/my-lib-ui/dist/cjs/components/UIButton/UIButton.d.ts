/// <reference types="react" />
import './UIButton.css';
export interface UIButtonProps {
    label: string;
    onClick?: () => void;
    color?: 'primary' | 'light' | 'dark';
}
declare const UIButton: (props: UIButtonProps) => JSX.Element;
export default UIButton;
