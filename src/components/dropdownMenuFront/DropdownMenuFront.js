import React, { useState } from 'react'
import styles from  './DropdownMenu.module.css'
import './transition.css'
import { CSSTransition } from 'react-transition-group';
import { DiCss3, DiHtml5 } from "react-icons/di";
import { SiTypescript, SiJavascript, SiBootstrap, SiTailwindcss, SiSass, SiReact, SiGithub, SiVisualstudiocode } from "react-icons/si";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const DropdownMenuFront = () => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight + 30;
        setMenuHeight(height);
    }

    const DropDownItem = ({ linkRef, children, goToMenu }) => {
        return (
            <Link to={linkRef} className={styles.menuItens} onClick={() => goToMenu && setActiveMenu(goToMenu)}> {children} </Link>
        )
    }

    return (
        <div className={styles.dropdown} style={{ height: menuHeight }}>

            <CSSTransition in={activeMenu === "main"} unmountOnExit timeout={500} classNames='menu-primary' onEnter={calcHeight}>
                <div className='menu'>
                    <DropDownItem goToMenu='linguagens de marcação e estilo' linkRef='#'>Linguagens de marcação e estilo</DropDownItem>
                    <DropDownItem goToMenu='linguagens de programação' linkRef='#'>Linguagens de programação</DropDownItem>
                    <DropDownItem goToMenu='css frameworks'  linkRef='#'>Css frameworks</DropDownItem>
                    <DropDownItem goToMenu='preprocessadores'linkRef='#'>Pré-processadores</DropDownItem>
                    <DropDownItem goToMenu='js frameworks'  linkRef='#'>Javascript frameworks</DropDownItem>
                    <DropDownItem goToMenu='ferramentas'  linkRef='#'>Ferramentas</DropDownItem>
                </div>
            </CSSTransition >

            <CSSTransition in={activeMenu === 'linguagens de marcação e estilo'} unmountOnExit timeout={500} classNames='menu-secondary' onEnter={calcHeight}>
                <div className='menu'>
                    <DropDownItem  linkRef='#' goToMenu="main">{<FiArrowLeftCircle />}</DropDownItem>
                    <DropDownItem  linkRef='BoxHtml'>{<DiHtml5 />}Html</DropDownItem>
                    <DropDownItem  linkRef='BoxCss'>{<DiCss3 />}Css</DropDownItem>
                </div>
            </CSSTransition >

            <CSSTransition in={activeMenu === 'linguagens de programação'} unmountOnExit timeout={500} classNames='menu-third' onEnter={calcHeight}>
                <div className='menu'>
                    <DropDownItem goToMenu="main" linkRef='#'>{<FiArrowLeftCircle />}</DropDownItem>
                    <DropDownItem linkRef='BoxJs'>{<SiJavascript />}Javascript</DropDownItem>
                    <DropDownItem linkRef='BoxTs'>{<SiTypescript />}Typescript</DropDownItem>
                </div>
            </CSSTransition >

            <CSSTransition in={activeMenu === 'css frameworks'} unmountOnExit timeout={500} classNames='menu-four' onEnter={calcHeight}>
                <div className='menu'>
                    <DropDownItem goToMenu="main" linkRef='#'>{<FiArrowLeftCircle />}</DropDownItem>
                    <DropDownItem linkRef='#'>{<SiBootstrap />}Bootstrap</DropDownItem>
                    <DropDownItem linkRef='#'>{<SiTailwindcss />}Tailwind</DropDownItem>
                </div>
            </CSSTransition >

            <CSSTransition in={activeMenu === 'preprocessadores'} unmountOnExit timeout={500} classNames='menu-five' onEnter={calcHeight}>
                <div className='menu'>
                    <DropDownItem goToMenu="main" linkRef='#'>{<FiArrowLeftCircle />}</DropDownItem>
                    <DropDownItem linkRef='#'>{<SiSass />}Sass</DropDownItem>
                </div>
            </CSSTransition >

            <CSSTransition in={activeMenu === 'js frameworks'} unmountOnExit timeout={500} classNames='menu-six' onEnter={calcHeight}>
                <div className='menu'>
                    <DropDownItem goToMenu="main" linkRef='#'>{<FiArrowLeftCircle />}</DropDownItem>
                    <DropDownItem linkRef='#'>{<SiReact />}React</DropDownItem>
                </div>
            </CSSTransition >

            <CSSTransition in={activeMenu === 'ferramentas'} unmountOnExit timeout={500} classNames='menu-seven' onEnter={calcHeight}>
                <div className='menu'>
                    <DropDownItem goToMenu="main" linkRef='#'>{<FiArrowLeftCircle />}</DropDownItem>
                    <DropDownItem linkRef='#'>{<SiGithub />}GitHub</DropDownItem>
                    <DropDownItem linkRef='#'>{<SiVisualstudiocode />}VsCode</DropDownItem>
                </div>
            </CSSTransition >
        </div>
    )
}

export default DropdownMenuFront