import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.css'
import { FaRegEye } from "react-icons/fa";
import { IoHardwareChipOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import useClickOutside from '../../hooks/useClickOutside';
import DropdownMenuFront from '../dropdownMenuFront/DropdownMenuFront.js';
import DropdownMenuDesing from '../dropdownMenuDesing/DropdownMenuFront';


const Header = () => {

    //RELOGIO
    const [clock, setClock] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClock(date.toLocaleTimeString());
        }, 1000)
    })

    //PRINCIPAL

    //REFS HOOKS
    let menuRefF = useRef(false);
    let menuRefD = useRef(false);

    //STATE HOOKS
    const [openFront, setOpenFront] = useState();
    const [openDesign, setOpenDesign] = useState();

    //HANDLECLICK FUNTIONS
    function handleClickDesing() {
        setOpenDesign(!openDesign);
    };
    function handleClickFront(e) {
        setOpenFront(!openFront);
    };

    //CLICKOUTSIDES HOOKS
    useClickOutside(menuRefF, () => {
        setOpenFront(false)
    });
    useClickOutside(menuRefD, () => {
        setOpenDesign(false)
    });

    return (
        <header className={styles.header}>

            <section className={styles.clock}>
                {clock}
            </section>

            <NavBar>
                <NavItem text='UI/UX DESING' icon={<MdOutlineDesignServices />} functionClick={handleClickDesing} open={openDesign} menuRef={menuRefD} disabled={true}>
                    <DropdownMenuDesing />
                </NavItem>

                <NavItem text='FRONT-END' icon={<FaRegEye />} functionClick={handleClickFront} open={openFront} menuRef={menuRefF}>
                    <DropdownMenuFront />
                </NavItem>
                <NavItem text='BACK-END' icon={<IoHardwareChipOutline />} disabled={true}>

                </NavItem>
            </NavBar>
        </header>
    )
}

//NAVBAR
const NavBar = ({ children }) => {

    return (
        <nav className={styles.navBar}>
            <ul>{children}</ul>
        </nav>
    )
}

//NAVITEM
const NavItem = ({ icon, text, children, functionClick, open, menuRef, disabled }) => {

    return (
        <li className={styles.navItem} ref={menuRef}>
            <button type='button' disabled={disabled} className={styles.button} onClick={functionClick}><span>{icon}</span>{text}</button>
            {open && children}
        </li>
    )
}

export default Header