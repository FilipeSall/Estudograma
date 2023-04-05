import React from 'react';
import HeaderNotebook from '../../notebookComponents/HeaderNotebook';
import htmlIcon from '../../../assets/imgs/htmlicon.webp';

function HtmlPage() {

  const folders= [
    {
      title:'Introdução ao HTML',
      subfolders:[
        {
          title:'O que é HTML?',
          path:'front-end/html/oqueehtml'
        },
        {
          title:'Estrutura básica de uma página HTML',
          path:'front-end/html/estruturahtml'
        },
        {
          title:'Doctype, elementos HTML, head e body',
          path:'front-end/html/elementoshtml'
        }
      ]
    },
    {
      title:'Elementos de texto e formatação',
      subfolders:[
        {
          title:'Headings (h1-h6)',
          path:'front-end/html/h'
        },
        {
          title:'Parágrafos(p)',
          path:'front-end/html/paragprafos'
        },
        {
          title:'Quebra de linha (br)',
          path:'front-end/html/br'
        },
        {
          title:'Ênfase e importância (em, strong)',
          path:'front-end/html/em'
        },
        {
          title:'Citações (q, blockquote)',
          path:'front-end/html/q'
        },
        {
          title:'Código e pré-formatação (code, pre)',
          path:'front-end/html/code'
        },
      ]
    },
    {
      title:'Listas e tabelas',
      subfolders:[
        {
          title:'Listas ordenadas (ol)',
          path:'front-end/html/ol'
        },
        {
          title:'Parágrafos(p)',
          path:'front-end/html/paragrafos'
        },
        {
          title:'Quebra de linha (br)',
          path:'front-end/html/quebradelinha'
        },
        {
          title:'Ênfase e importância (em, strong)',
          path:'front-end/html/enfase'
        },
        {
          title:'Citações (q, blockquote)',
          path:'front-end/html/citacoes'
        },
        {
          title:'Código e pré-formatação (code, pre)',
          path:'front-end/html/preformatacao'
        },
      ]
    },
  ]

  return (
    <>
        <HeaderNotebook img={htmlIcon} alt='secção html' folders={folders} />
    </>
  )
}

export default HtmlPage