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
                },
                {
                    text: 'CSS',
                    icon: <FaCss3Alt />,
                    href: '/front-end/css',
                },
            ],
            isActive: false,
        },
        {
            title:'Linguagens de programação',
            dropdownItems:[
                {
                    text:'Javascript',
                    icon: <IoLogoJavascript />,
                    href:'/front-end/javascript',
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

    const shortcuts = [
        {
            title: 'Formik',
            href: 'https://formik.org/docs/overview',
            text: 'Uma pequena biblioteca que te ajuda na criação de formulários.',
            img:'formik'
        },
        {
            title: 'Ícones React',
            href: 'https://react-icons.github.io/react-icons',
            text: 'Inclua ícones populares em seus projetos React facilmente com react-icons.',
            img:'reacticons'
        },
        {
            title: 'Toastify',
            href: 'https://fkhadra.github.io/react-toastify/introduction',
            text: 'Uma biblioteca popular para exibir notificações ou mensagens temporárias.',
            img:'toastify'
        },
        {
            title: 'Router',
            href: 'https://reactrouter.com/en/main',
            text: 'Uma biblioteca popular para gerenciamento de rotas em aplicações web React',
            img:'router'
        },
    ]

    return (
        <>
            <Menu links={links} alt='Secção front-end'  shortcuts={shortcuts} />
            <NavLinks links={links} />
            <Routes>
                <Route path='/html/*' element={<HtmlPage />} />
            </Routes>

        </>
    );
}

export default FrontEnd;
