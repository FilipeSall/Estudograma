import { useState } from 'react';
import FolderContainer from '../folderContainer/FolderContainer';
import styles from './BoxHtml.module.css';

const BoxHtml = () => {

    const [fundamentos, setFundamentos] = useState();
    const [conteudo, setConteudo] = useState();
    const [separacao, setSeparacao] = useState();
    const [metadados, setMetadados] = useState();
    const [inline, setInline] = useState();
    const [multimida, setMultimida] = useState();
    const [integrado, setIntegrado] = useState();
    const [script, setScript] = useState();
    const [table, setTable] = useState();
    const [formulario, setFormulario] = useState();
    const [interativo, setInterativo] = useState();

    function handleClick(state, setState, ...removeState) {
        removeState.forEach(state => {
            state(false)
        })

        setState(!state);
    }

    const htmlFiles = [
        {
            folderTitle: 'Fundamentos do HTML',
            state: fundamentos,
            function: () => handleClick(fundamentos, setFundamentos,
                setMetadados,
                setSeparacao,
                setConteudo,
                setInline,
                setScript,
                setTable,
                setFormulario,
                setInterativo),
            linkNav:'fundamentosHtml',
            links: [
                {
                    linkText: 'O que é HTML',
                    href: '#o-que-é-HTML'
                },
                {
                    linkText: 'Anatomia de um arquivo HTML',
                    href: '#anatomia-arquivo'
                },
            ],
        },
        {
            folderTitle: 'Metadados do documento',
            state: metadados,
            function: () => handleClick(metadados, setMetadados,
                setFundamentos,
                setSeparacao,
                setConteudo,
                setInline,
                setMultimida,
                setIntegrado,
                setScript,
                setTable,
                setFormulario,
                setInterativo),
                linkNav:'metadados',
            links: [
                {
                    linkText: 'Base',
                    href: '#base'
                },
                {
                    linkText: 'Head',
                    href: '#head'
                },
                {
                    linkText: 'Link',
                    href: '#link'
                },
                {
                    linkText: 'Meta',
                    href: '#meta'
                }
            ]
        },
        {
            folderTitle: 'Separação de conteúdos',
            state: separacao,
            function: () => handleClick(separacao, setSeparacao,
                setFundamentos,
                setMetadados,
                setConteudo,
                setInline,
                setMultimida,
                setIntegrado,
                setScript,
                setTable,
                setFormulario,
                setInterativo),
                linkNav:'separacaoConteudo',
            links: [
                {
                    linkText: 'Address',
                    href: '#address'
                },
                {
                    linkText: 'Article',
                    href: '#article'
                },
                {
                    linkText: 'Aside',
                    href: '#aside'
                },
                {
                    linkText: 'Div',
                    href: '#div'
                },
                {
                    linkText: 'Footer',
                    href: '#footer'
                },
                {
                    linkText: 'Header',
                    href: '#header'
                },
                {
                    linkText: 'Titulos',
                    href: '#titles'
                },
                {
                    linkText: 'Main',
                    href: '#main'
                },
                {
                    linkText: 'Nav',
                    href: '#nav'
                },
                {
                    linkText: 'Section',
                    href: '#section'
                },
            ],
        },
        {
            folderTitle: 'Conteúdo textual',
            state: conteudo,
            function: () => handleClick(conteudo, setConteudo,
                setFundamentos,
                setMetadados,
                setSeparacao,
                setInline,
                setMultimida,
                setIntegrado,
                setScript,
                setTable,
                setFormulario,
                setInterativo),
                linkNav:'textual',
            links: [
                {
                    linkText: 'Blockquote',
                    href: '#blockquote'
                },
                {
                    linkText: 'Figure',
                    href: '#figure'
                },
                {
                    linkText: 'Hr',
                    href: '#hr'
                },
                {
                    linkText: 'Listas',
                    href: '#listas'
                }, 
                {
                    linkText: 'Paragrafo',
                    href: '#paragrafo'
                }, 
                {
                    linkText: 'Pre',
                    href: '#pre'
                },
            ]
        },
        {
            folderTitle: 'Semântica textual inline',
            state: inline,
            function: () => handleClick(inline, setInline,
                setMetadados,
                setSeparacao,
                setConteudo,
                setFundamentos,
                setMultimida,
                setIntegrado,
                setScript,
                setTable,
                setFormulario,
                setInterativo),
            linkNav:'inline',
            links: [
                {
                    linkText: 'Ancora',
                    href: '#ancora',
                },
                {
                    linkText: 'Abbr',
                    href: '#abbr',
                },
                {
                    linkText: 'Break line',
                    href: '#break-line',
                },
                {
                    linkText: 'Cite',
                    href: '#cite'
                },
                {
                    linkText: 'Code',
                    href: '#code',
                },
                {
                    linkText: 'Quote',
                    href: '#quote',
                },
                {
                    linkText: 'Samp',
                    href: '#samp',
                },
                {
                    linkText: 'Span',
                    href: '#span',
                },
                {
                    linkText: 'Time',
                    href: '#time',
                },
                {
                    linkText: 'Var',
                    href: '#var',
                },
                {
                    linkText: 'Wbr',
                    href: '#wbr',
                },
            ],
        },
        {
            folderTitle: 'Imagem e multimídia',
            state: multimida,
            function: () => handleClick(multimida, setMultimida,
                setMetadados,
                setSeparacao,
                setConteudo,
                setInline,
                setFundamentos,
                setIntegrado,
                setScript,
                setTable,
                setFormulario,
                setInterativo),
            linkNav:'multimidia',
            links: [
                {
                    linkText: 'Area',
                    href: '#area'
                },
                {
                    linkText: 'Audio',
                    href: '#audio'
                },
                {
                    linkText: 'Img',
                    href: '#img'
                },
                {
                    linkText: 'Map',
                    href: '#map'
                },
                {
                    linkText: 'Track',
                    href: '#track'
                },
                {
                    linkText: 'Video',
                    href: '#video'
                },
            ],
        },
        {
            folderTitle: 'Conteúdo integrado',
            state: integrado,
            function: () => handleClick(integrado, setIntegrado,
                setMetadados,
                setSeparacao,
                setConteudo,
                setInline,
                setFundamentos,
                setScript,
                setTable,
                setFormulario,
                setInterativo),
            linkNav:'integrado',
            links: [
                {
                    linkText: 'Iframe',
                    href: '#iframe'
                },
                {
                    linkText: 'Picture',
                    href: '#picture'
                },
                {
                    linkText: 'Source',
                    href: '#source'
                },
            ],
        },
        {
            folderTitle: 'Script',
            state: script,
            function: () => handleClick(script, setScript,
                setMetadados,
                setSeparacao,
                setConteudo,
                setInline,
                setFundamentos,
                setIntegrado,
                setTable,
                setFormulario,
                setInterativo),
            linkNav:'script',
            links: [
                {
                    linkText: 'Canvas',
                    href: '#canvas'
                },
                {
                    linkText: 'Noscript',
                    href: '#noscript'
                },
                {
                    linkText: 'Script',
                    href: '#script'
                },
            ],
        },
        {
            folderTitle: 'Conteúdo tabulado',
            state: table,
            function: () => handleClick(table, setTable,
                setMetadados,
                setSeparacao,
                setConteudo,
                setInline,
                setFundamentos,
                setIntegrado,
                setScript,
                setFormulario),
            linkNav:'table',
            links: [
                {
                    linkText: 'Table',
                    href: '#table'
                },
                {
                    linkText: 'Caption',
                    href: '#caption'
                },
                {
                    linkText: 'Colgroup',
                    href: '#colgroup'
                },
                {
                    linkText: 'Thead',
                    href: '#thead'
                },
                {
                    linkText: 'Th',
                    href: '#th'
                },
                {
                    linkText: 'Tbody',
                    href: '#tbody'
                },
                {
                    linkText: 'Tr',
                    href: '#tr'
                },
                {
                    linkText: 'Td',
                    href: '#td'
                },
                {
                    linkText: 'Tfoot',
                    href: '#tfoot'
                },
            ],
        },
        {
            folderTitle: 'Formulário',
            state: formulario,
            function: () => handleClick(formulario, setFormulario,
                setMetadados,
                setSeparacao,
                setConteudo,
                setInline,
                setFundamentos,
                setIntegrado,
                setScript,
                setTable,
                setInterativo),
            linkNav:'formulario',
            links: [
                {
                    linkText: 'Form',
                    href: '#form'
                },
                {
                    linkText: 'Input',
                    href: '#input'
                },
                {
                    linkText: 'Label',
                    href: '#label'
                },
                {
                    linkText: 'Fieldset',
                    href: '#fieldset'
                },
                {
                    linkText: 'Legend',
                    href: '#legend'
                },
                {
                    linkText: 'Meter',
                    href: '#meter'
                },
                {
                    linkText: 'Progress',
                    href: '#progress'
                },
                {
                    linkText: 'Datalist',
                    href: '#datalist'
                },
                {
                    linkText: 'Select',
                    href: '#select'
                },
                {
                    linkText: 'Optgroup',
                    href: '#optgroup'
                },
                {
                    linkText: 'Option',
                    href: '#otpion'
                },
                {
                    linkText: 'Textarea',
                    href: '#textarea'
                },
                {
                    linkText: 'Optput',
                    href: '#optput'
                },
                {
                    linkText: 'Button',
                    href: '#button'
                },
            ],
        },
        {
            folderTitle: 'Elementos interativos',
            state: interativo,
            function: () => handleClick(interativo, setInterativo,
                setMetadados,
                setSeparacao,
                setConteudo,
                setInline,
                setFundamentos,
                setIntegrado,
                setScript,
                setTable,
                setFormulario),
            linkNav:'interativo',
            links: [
                {
                    linkText: 'Details',
                    href: '#details'
                },
                {
                    linkText: 'Summary',
                    href: '#summary'
                },
                {
                    linkText: 'Dialog',
                    href: '#dialog'
                },
            ],
        },
    ]

    return (
        <div className={styles.folderContainer}>
            {htmlFiles.map((file, index) => (
                <FolderContainer
                    key={index}
                    folderTitle={file.folderTitle}
                    links={file.links}
                    functionFile={file.function}
                    state={file.state}
                    linkNav={file.linkNav}
                />
            ))}
        </div>
    )
}

export default BoxHtml