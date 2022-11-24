/// <reference types="react" />
import './Nav.css';
import "../../assets/main.css";
export interface NavLinksProps {
    label: string;
    onClick(): any;
}
export interface NavProps {
    title: string;
    links: NavLinksProps[];
    showMenu: boolean;
    menuLabel: string;
    onMenuClick(): any;
}
declare const Nav: (props: NavProps) => JSX.Element;
export default Nav;
