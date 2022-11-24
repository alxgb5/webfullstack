/// <reference types="react" />
interface ButtonProps {
    label: string;
    onClick(): any;
    appearance?: 'flat' | 'outline';
    color?: 'primary' | 'secondary' | 'warning' | 'success' | 'danger';
    size?: 's' | 'm' | 'l';
    disabled?: boolean;
}
declare const Button: (props: ButtonProps) => JSX.Element;

interface NavLinksProps {
    label: string;
    onClick(): any;
}
interface NavProps {
    title: string;
    links: NavLinksProps[];
    showMenu: boolean;
    menuLabel: string;
    onMenuClick(): any;
}
declare const Nav: (props: NavProps) => JSX.Element;

interface SpinnerProps {
    show: boolean;
    size?: 's' | 'm';
    type?: 'ring' | 'bubble';
}
declare const Spinner: (props: SpinnerProps) => JSX.Element | null;

export { Button, Nav, Spinner };
