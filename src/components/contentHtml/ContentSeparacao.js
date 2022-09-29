import React from 'react';
import Title from '../textFormat/Title';
import styles from './Content.module.css';
import semantic from '../../common/assets/images/html/SeparacaoConteudo/semantic.png';
import article from '../../common/assets/images/html/SeparacaoConteudo/article.png';
import aside from '../../common/assets/images/html/SeparacaoConteudo/aside.png';
import main from '../../common/assets/images/html/SeparacaoConteudo/main.png';
import nav from '../../common/assets/images/html/SeparacaoConteudo/nav.png';

import Image from '../textFormat/Image';

import WordStyle from '../textFormat/WordStyle';
import { ImForward } from "react-icons/im";
import { FiArrowRight } from "react-icons/fi";
import Code from '../textFormat/Code';

const ContentSeparacao = () => {

    const meSignal = '<';
    const maSignal = '>';

    return (
        <section className={`${styles.content} + animationFromTop`}>
            <p>Elementos de separação de conteúdo permitem organizar o conteúdo do documento em partes lógicas. Use elementos de separação para criar um esboço do conteúdo da página, incluindo navegação por cabeçalho e rodapé, e elementos de cabeçalho para identificar seções de conteúdo.
            </p>
            <Image src={semantic} alt='exemplo de semantica de conteudo' />
            <Title title='Address' id='address' />
            <p>O elemento HTML {meSignal}address{maSignal} fornece informações de contato para seu ancestral article ou body mais próximo; no segundo caso, ele se aplica ao documento inteiro.</p>
            <p>A <code>address</code> tag define as informações de contato do autor/proprietário de um documento ou artigo.</p>
            <p>As informações de contato podem ser um endereço de e-mail, URL, endereço físico, número de telefone, identificador de mídia social, etc.</p>
            <p>O texto no <code>{meSignal}address{maSignal}</code> elemento geralmente é renderizado em itálico e os navegadores sempre adicionam uma quebra de linha antes e depois do elemento <code>{meSignal}address{maSignal}</code>.</p>
            <p><ImForward />Exemplo:</p>
            <div className={styles.result}>
                <WordStyle font='bold'> <p><code>{meSignal}address{maSignal}</code></p> </WordStyle>
                <p>Escrito por {meSignal}a href="mailto:filipeSallesDev@gmail.com"{maSignal}Filipe Salles{meSignal}/a{maSignal}.</p>
                <WordStyle font='bold'> <p><code>{meSignal}/address{maSignal}</code></p> </WordStyle>
            </div>
            <p><ImForward />Resultado:</p>
            <address>
                <p className={styles.result}>Esrito por <a href='mailto:filipesallesdev@gmail.com'> Filipe Salles</a> </p>
            </address>
            <Title title='Article' id='article' />
            <p>O Elemento HTML <code>{meSignal}article{maSignal}</code> representa uma composição independente em um documento, página, aplicação, ou site, ou que é destinado a ser distribuido de forma independente ou reutilizável, por exemplo, em sindicação. Este poderia ser o post de um fórum, um artigo de revista ou jornal, um post de um blog, um comentário enviado por um usuário, um gadget ou widget interativos, ou qualquer outra forma de conteúdo independente.</p>
            <p>A  <code>{meSignal}article{maSignal}</code> tag especifica conteúdo independente e autocontido.</p>
            <p>Um artigo deve fazer sentido por si só e deve ser possível distribuí-lo independentemente do resto do site. Fontes potenciais para elemento o <code>{meSignal}article{maSignal}</code>:</p>
            <ul className={styles.list}>
                <li> <FiArrowRight /> Postagem no fórum</li>
                <li> <FiArrowRight /> Postagem do blog</li>
                <li> <FiArrowRight /> Notícia</li>
            </ul>
            <Image src={article} alt='Exeplo de estrutura com article' />
            <p> Um artigo deve fazer sentido por conta própria. Antes de substituir todos os seus div's por elementos de artigo, sempre pergunte a si mesmo: “É possível lê-lo independentemente do resto do site?”</p>
            <Title title='Aside' id='aside' />
            <p>O elemento HTML <code>{meSignal}aside{maSignal}</code> representa uma seção de uma página que consiste de conteúdo que é tangencialmente relacionado ao conteúdo do seu entorno, que poderia ser considerado separado do conteúdo. Essas seções são, muitas vezes, representadas como barras laterais. Elas muitas vezes contem explicações laterais, como a definição de um glossário; conteúdo vagamente relacionado, como avisos; a biografia do autor; ou, em aplicações web, informações de perfil ou links de blogs relacionados.</p>
            <p> A <code>{meSignal}aside{maSignal}</code> define algum conteúdo além do conteúdo em que é colocado.</p>
            <p>O <code>{meSignal}aside{maSignal}</code> conteúdo geralmente é colocado como uma barra lateral em um documento.</p>
            <p>O <code>{meSignal}aside{maSignal}</code>  elemento não é renderizado como algo especial em um navegador. No entanto, você pode usar CSS para estilizar o <code>{meSignal}aside{maSignal}</code> elemento</p>
            <Image src={aside} alt='exemplo de estrutura aside' />
            <p>Só porque algum conteúdo aparece à esquerda ou à direita do conteúdo principal não é motivo suficiente para usar o elemento <code>{meSignal}aside{maSignal}</code>. Pergunte a si mesmo se o conteúdo <code>{meSignal}aside{maSignal}</code> pode ser removido sem reduzir o significado do conteúdo principal. Pullquotes são um exemplo de conteúdo tangencialmente relacionado.</p>
            <Title id='div' title='Div' />
            <p>O elemento de divisão HTML <Code text='div'/> é um container genérico para conteúdo de fluxo, que de certa forma não representa nada. Ele pode ser utilizado para agrupar elementos para fins de estilos (usando class ou id), ou porque eles compartilham valores de atributos, como lang. Ele deve ser utilizado somente quando não tiver outro elemento de semântica (tal como article ou nav).</p>
            <Title title='Footer' id='footer' />
            <p>O elemento HTML de Rodapé <code>{meSignal}footer{maSignal}</code> representa um rodapé para o seu sectioning content (conteúdo de seção) mais próximo ou sectioning root elemento (ou seja, seu parente mais próximo article, aside, nav, section, blockquote, body, details, fieldset, figure, td). Normalmente um rodapé contém informações sobre o autor da seção de dados, direitos autorais ou links para documentos relacionados.</p>
            <p>A  <code>{meSignal}footer{maSignal}</code> tag define um rodapé para um documento ou seção. Um  <code>{meSignal}footer{maSignal}</code> elemento normalmente contém:</p>
            <ul className={styles.list}>
                <li><FiArrowRight /> informações de autoria</li>
                <li><FiArrowRight /> Informações sobre direitos autorais</li>
                <li><FiArrowRight /> Informações de Contato</li>
                <li><FiArrowRight /> Mapa do site</li>
                <li><FiArrowRight /> Voltar ao topo links</li>
                <li><FiArrowRight /> Documentos relacionados</li>
            </ul>
            <p>Você pode ter vários <code>{meSignal}footer{maSignal}</code> elementos em um documento.</p>
            <p>As informações de contato dentro de um <code>{meSignal}footer{maSignal}</code> elemento devem estar dentro de uma tag <code>{meSignal}address{maSignal}</code>.</p>
            <Title title='Header' id='header' />
            <p>O elemento HTML  <code>{meSignal}header{maSignal}</code> representa um grupo de suporte introdutório ou navegacional. Pode conter alguns elementos de cabeçalho mas também outros elementos como um logo, seções de cabeçalho, formulário de pesquisa, e outros.</p>
            <p>O  <code>{meSignal}header{maSignal}</code>  elemento representa um contêiner para conteúdo introdutório ou um conjunto de links de navegação. Um <code>{meSignal}header{maSignal}</code>  elemento normalmente contém:</p>
            <ul className={styles.list}>
                <li> <FiArrowRight /> Um ou mais elementos de título ({meSignal}h1{maSignal} - {meSignal}h6{maSignal})</li>
                <li> <FiArrowRight /> Logotipo ou ícone</li>
                <li> <FiArrowRight /> Informações de autoria</li>
            </ul>
            <Title  id='titles' title='Titles' />
            <p>Os elementos HTML <code>{meSignal}h1{maSignal}-{meSignal}h6{maSignal}</code> representam seis níveis de título de seção. h1 é o nível de seção mais alto e h6 é o mais baixo.</p>
            <p>Use apenas um {meSignal}h1{maSignal} por página - isso deve representar o título/assunto principal de toda a página. Além disso, não pule os níveis de título - comece com {meSignal}h1{maSignal}, depois use {meSignal}h2{maSignal}, e assim por diante.</p>
            <Title title='Main' id='main' />
            <p>A <code>{meSignal}main{maSignal}</code>  tag especifica o conteúdo principal de um documento.</p>
            <p>O conteúdo dentro do <code>{meSignal}main{maSignal}</code> elemento deve ser exclusivo do documento. Ele não deve conter nenhum conteúdo repetido em documentos como barras laterais, links de navegação, informações de direitos autorais, logotipos de sites e formulários de pesquisa.</p>
            <p>Não deve haver mais de um <code>{meSignal}main{maSignal}</code> elemento em um documento. O <code>{meSignal}main{maSignal}</code> elemento NÃO deve ser descendente de um elemento <code>{meSignal}article{maSignal}</code>, <code>{meSignal}aside{maSignal}</code>, <code>{meSignal}footer{maSignal}</code>, <code>{meSignal}header{maSignal}</code> ou <code>{meSignal}nav{maSignal}</code>.</p>
            <Image src={main} alt='exemplo de estrutura main' />
            <Title  title='Nav' id='nav' />
            <p>O Elemento HTML de Navegação <code>{meSignal}nav{maSignal}</code> representa uma seção de uma página que aponta para outras páginas ou para outras áreas da página, ou seja, uma seção com links de navegação.</p>
            <p>Observe que nem todos os links de um documento devem estar dentro de um <code>{meSignal}nav{maSignal}</code> elemento. O <code>{meSignal}nav{maSignal}</code> elemento destina-se apenas ao bloco principal de links de navegação.</p>
            <p>Os navegadores, como leitores de tela para usuários com deficiência, podem usar esse elemento para determinar se devem omitir a renderização inicial desse conteúdo.</p>
            <Image  src={nav} alt='Exemplo de estrutura nav' />
            <Title title='Section' id='section' />
            <p>O elemento HTML <code>{meSignal}section{maSignal}</code>representa uma seção genérica contida em um documento HTML, geralmente com um título, quando não existir um elemento semântico mais específico para representá-lo.</p>
            <p>Por exemplo, um menu de navegação deve estar dentro um elemento <code>{meSignal}nav{maSignal}</code>, mas uma lista de resultados de pesquisa ou a exibição de um mapa e seus controles não possuem elementos específicos, e podem ser colocados dentro de uma <code>{meSignal}section{maSignal}</code>.</p>
        </section>
    )
}

export default ContentSeparacao