import React from 'react';
import HeaderNotebook from '../../notebookComponents/HeaderNotebook';
import htmlIcon from '../../../assets/imgs/htmlicon.webp';
import { Route, Routes } from 'react-router-dom';
import IntroducaoHtml from './introducaohtml/IntroducaoHtml';

function HtmlPage() {

  const folders= [
    {
      title:'Introdução ao HTML',
      path:'/front-end/html/intro',
      subfolders:[
        {
          title:'O que é HTML?',
          path:'#oqueehtml'
        },
        {
          title:'Estrutura básica de uma página HTML',
          path:'#estruturahtml'
        },
      ]
    },
    {
      title:'Elementos de texto e formatação',
      path:'/front-end/html/el',
      subfolders:[
        {
          title:'Headings (h1-h6)',
        },
        {
          title:'Parágrafos(p)',
        },
        {
          title:'Quebra de linha (br)',
        },
        {
          title:'Ênfase e importância (em, strong)',
        },
        {
          title:'Citações (q, blockquote)',
        },
        {
          title:'Código e pré-formatação (code, pre)',
        },
      ]
    },
    {
      title:'Listas e tabelas',
      path:'/front-end/html/table',
      subfolders:[
        {
          title:'Listas ordenadas (ol)',
        },
        {
          title:'Listas não ordenadas (ul)',
        },
        {
          title:'Listas de descrição (dl)',
        },
        {
          title:'Tabelas (table, tr, th, td)',
        },
      ]
    },
    {
      title:'Elementos inline e block',
      path:'/front-end/html/inlineblock',
      subfolders:[
        {
          title:'Diferença entre inline e block',
        },
        {
          title:'Exemplos de elementos inline e block',
        },
        {
          title:'Listas de descrição (dl)',
        },
        {
          title:'Tabelas (table, tr, th, td)',
        },
      ]
    },
  ]

  return (
    <>
        <HeaderNotebook img={htmlIcon} alt='secção html' folders={folders} />
        <Routes>
          <Route path='/intro' element={<IntroducaoHtml />} />
        </Routes>
    </>
  )
}

export default HtmlPage