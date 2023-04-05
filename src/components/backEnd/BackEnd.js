import React from 'react';
import Menu from '../menuNav/Menu';
import './backEnd.css';
import { FaPython,FaNodeJs, FaJenkins } from 'react-icons/fa';
import { SiMysql, SiMongodb } from "react-icons/si";
import { ImNpm } from "react-icons/im";

function BackEnd() {

    const links = [
        {
            title: 'Linguagens de programação',
            dropdownItems: [
                {
                    text: 'NodeJs',
                    icon: <FaNodeJs />,
                    href: '/back-end/node',
                    imgId:'node',
                },
                {
                    text: 'Python ',
                    icon: <FaPython />,
                    href: '/back-end/pynton',
                    imgId:'pynton',
                },
            ],
        },
        {
            title:'Bancos de dados e armazenamento',
            dropdownItems:[
                {
                    text:'MySQL',
                    icon: <SiMysql />,
                    herf:'/back-end/mysql'
                },
                {
                    text:'mongoDb',
                    icon: <SiMongodb />,
                    herf:'/back=end/mongodb'
                }
            ],
            isActive: false,
        },
        
        {
            title: 'Ferramentas e bibliotecas',
            dropdownItems: [
                {
                    text: 'Jenkins',
                    icon: <FaJenkins />,
                    href: '/back-end/jenkins',
                },
                {
                    text: 'Gerenciamento de dependências',
                    icon: <ImNpm />,
                    href: '/front-end/bootstrap',
                },
            ],
            isActive: false,
        },
    ]


  return (
    <Menu alt='Secção back-end' links={links} />
  )
}

export default BackEnd