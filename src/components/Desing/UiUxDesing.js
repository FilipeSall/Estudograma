import React from 'react';
import Menu from '../menuNav/Menu';
import './uiuxdesing.css';
import {
    FaRegLightbulb,
    FaMobileAlt,
    FaPencilRuler,
    FaUserFriends,
    FaSitemap
} from 'react-icons/fa';
import NavLinks from '../navLinks/NavLinks';

function UiUxDesing() {

    const links = [
        {
            title: 'Princípios e interação',
            dropdownItems: [
                {
                    text: 'Hierarquia',
                    icon: <FaRegLightbulb />,
                    href: '/ui-ux/principios/hierarquia',
                    imgId: 'hierarquia',
                },
                {
                    text: 'Padrões de navegação',
                    icon: <FaMobileAlt />,
                    href: '/ui-ux/interacao/navegacao',
                    imgId: 'navegacao',
                },
            ],
        },
        {
            title: 'Ferramentas e Experiência do usuário (UX)',
            dropdownItems: [
                {
                    text: 'Sketch',
                    icon: <FaPencilRuler />,
                    href: '/ui-ux/ferramentas/sketch',
                    imgId: 'sketch',
                },
                {
                    text: 'Pesquisa com usuários',
                    icon: <FaUserFriends />,
                    href: '/ui-ux/ux/pesquisa',
                    imgId: 'pesquisa',
                },
            ],
        },
        {
            title: 'Design de sistemas',
            dropdownItems: [
                {
                    text: 'Design systems',
                    icon: <FaSitemap />,
                    href: '/ui-ux/sistemas/design-systems',
                    imgId: 'design-systems',
                },
            ],
        },
    ];


    const shortcuts = [
        {
            title: 'Gerador de cores',
            href: 'https://coolors.co/',
            text: 'Cria paletas de cores atraentes',
            img:'coolors'
        },
        {
            title:'Repositório SVG',
            href:'https://www.svgrepo.com/',
            text:'Vários icones SVG',
            img:'svgrepo'
        },
        {
            title:'Remover fundo',
            href:'https://www.remove.bg/pt-br/',
            text:'Deixa a imagem transparente',
            img:'removebg'
        },
        {
            title:'Imagem leve',
            href:'https://squoosh.app/',
            text:'Altera peso e formato',
            img:'squoosh',
        }
    ]


    return (
        <>
        <Menu alt='Secção back-end' links={links} shortcuts={shortcuts} />
        <NavLinks links={links} />
        </>
    )
}

export default UiUxDesing