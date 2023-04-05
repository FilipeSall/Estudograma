import React from 'react';
import Menu from '../menuNav/Menu';
import './FrontEnd.css';
import { Route, Routes } from "react-router-dom";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsFillBootstrapFill } from "react-icons/bs";
import HtmlPage from '../notebookPages//html/HtmlPage.js';
import NavLinks from '../navLinks/NavLinks';

function FrontEnd() {

    const links = [
        {
            title: 'Linguagens de marcação e estilo',
            dropdownItems: [
                {
                    text: 'HTML',
                    icon: <AiFillHtml5 />,
                    href: '/front-end/html',
                    imgId:'html',
                },
                {
                    text: 'CSS',
                    icon: <FaCss3Alt />,
                    href: '/front-end/css',
                    imgId:'css',
                },
            ],
        },
        {
            title:'Linguagens de programação',
            dropdownItems:[
                {
                    text:'Javascript',
                    icon: <IoLogoJavascript />,
                    herf:'/front-end/javascript'
                }
            ],
            isActive: false,
        },
        {
            title: 'Frameworks',
            dropdownItems: [
                {
                    text: 'ReactJs',
                    icon: <FaReact />,
                    href: '/front-end/react',
                },
                {
                    text: 'Bootstrap',
                    icon: <BsFillBootstrapFill />,
                    href: '/front-end/bootstrap',
                },
            ],
            isActive: false,
        },
    ]

    return (
        <>
            <Menu links={links} alt='Secção front-end' />
            <NavLinks links={links} />
            <Routes>
                <Route path='/html' element={<HtmlPage />} />
            </Routes>

        </>
    );
}

export default FrontEnd;
