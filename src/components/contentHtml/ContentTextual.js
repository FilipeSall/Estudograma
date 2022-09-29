import React from 'react';
import Code from '../textFormat/Code';
import Title from '../textFormat/Title';
import styles from './Content.module.css';
import figure from '../../common/assets/images/html/conteudoTextual/figure.png';
import lists from '../../common/assets/images/html/conteudoTextual/lists.png';

import bloquote from '../../common/assets/images/html/conteudoTextual/blockquote.png';
import Image from '../textFormat/Image';
import MiniTitle from '../textFormat/MiniTitle';

import { FcAdvertising } from "react-icons/fc";

const ContentTextual = () => {


    return (
        <section className={`${styles.content} + animationFromTop`}>
            <p>Usam-se elementos HTML de conteúdo textual para se organizar blocos ou seções de conteúdo postos entre as tags de abertura <Code text='body' /> e fechamento <Code text='/body' /> . Importantes para accessibilidade e SEO, esses elementos identificam o propósito ou estrutura do conteúdo.</p>
            <Title title='Blockquote' id='blockquote' />
            <p>O Elemento HTML <Code text='blockquote' />(ou Elemento HTML de citação de bloco) indica que o texto incluído é uma longa citação. Normalmente, este é processado visualmente pelo recuo. A URL para a fonte da citação pode ser dada usando o atributo cite, enquanto uma representação de texto da fonte pode ser dada usando o cite elemento.</p>
            <p>A <Code text='blockquote' /> tag especifica uma seção que é citada de outra fonte.</p>
            <p>Os navegadores geralmente recuam <Code text='blockquote' /> elementos. </p>
            <Image src={bloquote} alt='exemplo de Blockquote' />
            <Title title='Figure' id='figure' />
            <p>O Elemento HTML <Code text='figure'/> representa o conteúdo independente, frequentemente com uma legenda (figcaption), e é normalmente referido como uma única unidade. Enquanto ela está relacionada com o fluxo principal, sua posição é independente do fluxo principal.Normalmente, isso é uma imagem, uma ilustração, um diagrama, um trecho de código ou uma esquema que é referenciado no texto principal, mas que pode ser movido para outra página ou para um apêndice, sem afetar o fluxo principal.</p>
            <p>A <Code text='figure'/> tag especifica conteúdo independente, como ilustrações, diagramas, fotos, listagens de código etc.</p>
            <p>Embora o conteúdo do <Code text='figure'/> elemento esteja relacionado ao fluxo principal, sua posição é independente do fluxo principal e, se removido, não deve afetar o fluxo do documento.</p>
            <p>O elemento <Code text='figcaption'/> é usado para adicionar uma legenda ao elemento <Code text='figure'/>.</p>
            <p>O elemento <Code text='figcaption'/> pode ser colocado como o primeiro ou último filho do elemento<Code text='figure'/>.</p>
            <Image  src={figure} alt='Exemplo de figure com figcaption' />
            <Title title='Hr' id='hr'/>
            <p>
            O elemento HTML <Code text='hr'/> representa uma quebra temática entre elementos de nível de parágrafo (por exemplo , uma mudança da cena de uma história, ou uma mudança de tema com uma seção). Nas versões anteriores do HTML, representava uma linha horizontal. Pode continuar sendo exibida como uma linha horizontal nos navegadores, mas agora está definida em termos semânticos, em vez de termos de apresentação.
            </p>
            <p>A <Code text='hr'/> tag define uma quebra temática em uma página HTML (por exemplo, uma mudança de tópico).</p>
            <p>O <Code text='hr'/> elemento é exibido com mais frequência como uma regra horizontal usada para separar o conteúdo (ou definir uma alteração) em uma página HTML.</p>
            <Title  title='Listas' id='listas' />
            <p>As listas HTML permitem que os desenvolvedores da Web agrupem um conjunto de itens relacionados em listas.</p>
            <MiniTitle title='Listas ordenadas' icon={<FcAdvertising />} />
            <p>
            O Elemento HTML <Code text='ol'/> (ou Elemento HTML de lista ordenada) representa uma lista de itens ordenados. De forma característica esses itens ordenados em uma lista são mostrados com uma contagem que os precede, que pode ser de qualquer tipo, como numerais, letras, algarismos romanos, ou simples símbolos. Esse modelo numerado não é definido na descrição html da página, mas na folha de estilos CSS associada, pela propriedade list-style-type.
            </p>
            <MiniTitle title='Listas desordenadas' icon={<FcAdvertising />} />
            <p>O elemento HTML  <Code text='ul'/>  (ou elemento HTML de Lista desordenada) representa uma lista de itens sem ordem rígida, isto é, uma coleção de itens que não trazem uma ordenação numérica e as suas posições, nessa lista, são irrelevantes. Caracteristicamente, os itens em uma lista desordenada são exibidos com um marcador que pode ter várias formas, como um ponto, um círculo, ou um quadrado. O tipo de marcador não é definido na descrição HTML da página, mas na CSS associada, utilizando a propriedade list-style-type.</p>
            <MiniTitle title='Itens da lista' icon={<FcAdvertising />} />
            <p>O elemento HTML  <Code text='li'/> (ou a Lista dos Itens de um elemento HTML) é usado para representar um item que faz parte de uma lista. Este item deve estar contido em um elemento pai: uma lista ordenada (ol), uma lista desordenada (ul), ou um menu (menu) e representa uma única entidade dessa lista. Em menus e listas desordenadas a relação de itens é exibida, normalmente, usando pontos de marcação (as bolinhas). Em listas ordenadas eles são, comumente, mostrados com algum contador ascendente - como um número, ou letra - à sua esquerda.</p>
            <Image  src={lists} alt='exemplo de listas não ordenadas' />
            <Title  title='Parágrafo' id='paragrafo' />
            <p>O elemento HTML <Code text='p'/> representa um parágrafo. Em mídias visuais, parágrafos são representados como blocos indentados de texto com a primeira letra avançada e separados por linhas em branco. Já em HTML, parágrafos são usados para agrupar conteúdos relacionados de qualquer tipo, como imagens e campos de um formulário.</p>
            <p>Parágrafos são Elementos block-level, e fecharão automaticamente caso outro Elemento block-level inicie antes da tag de fechamento <Code text='p'/>.</p>
            <Title title='Pre' id='pre' />
            <p>HTML texto preformatado <Code text='pre'/> é a tag utilizada para representar texto pré-formatado. Um texto dentro desse elemento é tipicamente exibido em uma fonte não proporcional da mesma maneira em que o texto original foi disposto no arquivo. Espaços em branco são mantidos no texto da mesma forma em que este foi digitado.</p>
            <p>A <Code text='pre'/> tag define o texto pré-formatado.</p>
            <p>O texto em um <Code text='pre'/> elemento é exibido em uma fonte de largura fixa e o texto preserva espaços e quebras de linha. O texto será exibido exatamente como escrito no código-fonte HTML.</p>
        </section>
    )
}

export default ContentTextual