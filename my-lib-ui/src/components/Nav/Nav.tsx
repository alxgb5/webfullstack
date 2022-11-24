import React from "react";
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

const Nav = (props: NavProps) => {
    return (
        <div className='nav-container'>
            <div className='nav-title'>
                <a href='/'><strong>{props.title}</strong></a>
            </div>
            <div className='nav-links'>
                {props.links.map(x => <a onClick={x.onClick} key={x.label}>{x.label}</a>)}
                {
                    props.showMenu &&
                    <a onClick={props.onMenuClick}>
                        <div className='nav-contact'>
                            <button>{props.menuLabel}</button>
                        </div>
                    </a>
                }
            </div>
        </div>
    );
};

export default Nav;