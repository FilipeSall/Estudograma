import React, { useState } from 'react'
import styles from  './DropdownMenu.module.css'
import './transition.css'
import { CSSTransition } from 'react-transition-group';
import { FiArrowLeftCircle, FiFigma } from "react-icons/fi";

const DropdownMenuDesing = () => {
    const [activeMenuD, setActiveMenuD] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight + 30;
        setMenuHeight(height);
    }

    const DropDownItem = ({ href, children, goToMenu }) => {
        return (
            <a href={href} className={styles.menuItens} onClick={() => goToMenu && setActiveMenuD(goToMenu)}> {children} </a>
        )
    }

    return (
        <div className={styles.dropdown} style={{ height: menuHeight }}>

            <CSSTransition in={activeMenuD === "main"} unmountOnExit timeout={500} classNames='menu-1' onEnter={calcHeight}>
                <div className='menu'>
                    <DropDownItem goToMenu='ferramentas'>Ferramentas</DropDownItem>
                </div>
            </CSSTransition >

            <CSSTransition in={activeMenuD === 'ferramentas'} unmountOnExit timeout={500} classNames='menu-2' onEnter={calcHeight}>
                <div className='menu'>
                    <DropDownItem goToMenu="main">{<FiArrowLeftCircle />}</DropDownItem>
                    <DropDownItem>{<FiFigma />}Figma</DropDownItem>
                </div>
            </CSSTransition >
        </div>
    )
}

export default DropdownMenuDesing