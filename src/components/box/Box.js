import React from 'react';
import styles from './Box.module.css';
import './Box.css';
import BoxHtml from '../boxHtml/BoxHtml';
import ContentFundamentos from '../contentHtml/ContentFundamentos.js'
import { Route, Routes } from 'react-router-dom';

import ContentMetadados from '../contentHtml/ContentMetadados';
import ContentSeparacao from '../contentHtml/ContentSeparacao';
import ContentTextual from '../contentHtml/ContentTextual';
import ContentInline from '../contentHtml/ContentInline';
import ContentIntegrado from '../contentHtml/ContentIntegrado';
import ContentScript from '../contentHtml/ContentScript';
import ContentTable from '../contentHtml/ContentTable';
import ContentForm from '../contentHtml/ContentForm';
import ContentMultimidia from '../contentHtml/ContentMultimidia';



const Box = ({ page }) => {
    return (
        <section className={styles.mainContainer}>

            <header className={styles.header}>

                {page === 'html' ? <div className='html'>
                </div> : null}
                {page === 'css' ? <div className='css'>
                </div> : null}
                {page === 'javascript' ? <div className='javascript'>
                </div> : null}
                {page === 'typescript' ? <div className='typescript'>
                </div> : null}

                <div className={styles.inputContainer}>
                    <input type="text" className={styles.input} name="html__search-box" placeholder="Pesquisar documentação..."></input>
                </div>

            </header>

            <section className={styles.lateralDropdown}>
                {page === 'html' ? <BoxHtml /> : null}
            </section>

            <section className={styles.contentContainer}> 
            <Routes>
                <Route path='fundamentosHtml' element={<ContentFundamentos />}/>
                <Route path='metadados' element={<ContentMetadados />}/>
                <Route path='separacaoConteudo' element={<ContentSeparacao />}/>
                <Route path='textual' element={<ContentTextual />}/>
                <Route path='inline' element={<ContentInline />}/>
                <Route path='multimidia' element={<ContentMultimidia />}/>
                <Route path='integrado' element={<ContentIntegrado />}/>
                <Route path='script' element={<ContentScript />}/>
                <Route path='table' element={<ContentTable />}/>
                <Route path='formulario' element={<ContentForm />}/>
            </Routes>
            </section>
                
        </section>

    )
}

export default Box