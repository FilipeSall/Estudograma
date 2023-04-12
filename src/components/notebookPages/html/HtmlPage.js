import React from 'react';
import HeaderNotebook from '../../notebookComponents/HeaderNotebook';
import htmlIcon from '../../../assets/imgs/htmlicon.webp';
import { Route, Routes } from 'react-router-dom';
import IntroducaoHtml from './introducaohtml/IntroducaoHtml';
import ElementosHtml from './introducaohtml/ElementosHtml';

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
          path:'#headings'
        },
        {
          title:'Parágrafos(p)',
          path:'#paragrafo'
        },
        {
          title:'Quebra de linha (br)',
          path:'#br'
        },
        {
          title:'Ênfase e importância (em, strong)',
          path:'#enfase'
        },
        {
          title:'Citações (q, blockquote)',
          path:'#citacao'
        },
        {
          title:'Código e pré-formatação (code, pre)',
          path:'#code'
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
    {
      title:'Links e âncoras',
      path:'/front-end/html/links',
      subfolders:[
        {
          title:'Criando links (a)',
        },
        {
          title:'Atributos href, target, rel',
        },
        {
          title:'Âncoras e links internos',
        },
      ]
    },
    {
      title:'Imagens e multimídia',
      path:'/front-end/html/multimidia',
      subfolders:[
        {
          title:'Inserindo imagens (img)',
        },
        {
          title:'Atributos src, alt, width, height',
        },
        {
          title:'Vídeo e áudio (video, audio)',
        },
        {
          title:'Incorporando mídia externa (iframe)',
        },
      ]
    },
    {
      title:'Formulários',
      path:'/front-end/html/forms',
      subfolders:[
        {
          title:'Elemento form',
        },
        {
          title:'Campos de entrada (input, textarea, select)',
        },
        {
          title:'Botões (button)',
        },
        {
          title:'Atributos name, type, value, placeholder',
        },
        {
          title:'Enviar formulários (métodos GET e POST)',
        },
      ]
    },
    {
      title:'Semântica e acessibilidade',
      path:'/front-end/html/semantica',
      subfolders:[
        {
          title:'Elementos semânticos (header, footer, main, article, section, nav, aside)',
        },
        {
          title:'Atributos ARIA',
        },
        {
          title:'Estrutura e hierarquia de cabeçalhos',
        },
      ]
    },
    {
      title:'Meta informações e SEO',
      path:'/front-end/html/seo',
      subfolders:[
        {
          title:'Meta tags (description, keywords, viewport, charset)',
        },
        {
          title:'Título da página (title)',
        },
        {
          title:'Open Graph e Twitter Card',
        },
      ]
    },
    {
      title:'CSS e JavaScript',
      path:'/front-end/html/cssjs',
      subfolders:[
        {
          title:'Incorporando CSS (elemento style, link)',
        },
        {
          title:'Incorporando JavaScript (elemento script)',
        },
        {
          title:'Manipulando o DOM',
        },
      ]
    },
    {
      title:'HTML5 avançado',
      path:'/front-end/html/cssjs',
      subfolders:[
        {
          title:'Canvas e gráficos SVG',
        },
        {
          title:'Geolocalização',
        },
        {
          title:'Armazenamento local e de sessão',
        },
        {
          title:'API de arrastar e soltar (drag and drop)',
        },
        {
          title:'WebSockets e comunicação em tempo real',
        },
      ]
    },
  ]

  return (
    <>
        <HeaderNotebook img={htmlIcon} alt='secção html' folders={folders} />
        <Routes>
          <Route path='/intro' element={<IntroducaoHtml />} />
          <Route path='/el' element={<ElementosHtml />} />
        </Routes>
    </>
  )
}

export default HtmlPage