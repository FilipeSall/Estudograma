import React from 'react';
import Code from '../textFormat/Code';
import Title from '../textFormat/Title';
import styles from './Content.module.css';

import { FiArrowRight } from "react-icons/fi";
import MiniTitle from '../textFormat/MiniTitle';
import { FcAdvertising } from "react-icons/fc";
import { ImForward } from "react-icons/im";
import AttributesHtml from '../attributes/AttributesHtml';
import WordStyle from '../textFormat/WordStyle';

const ContentInline = () => {
    return (
        <section className={`${styles.content} + animationFromTop`}>
            <p>Usa-se a semântica textual inline para definir o significado, estrutura, ou estilo de uma palavra, linha, ou de qualquer outro tipo de texto.</p>
            <Title title='Âncora' id='ancora' />
            <p>O elemento <Code text='a' /> em HTML (ou elemento âncora), com o atributo href cria-se um hiperligação nas páginas web, arquivos, endereços de emails, ligações na mesma página ou endereços na URL. O conteúdo dentro de cada <Code text='a' /> precisará indicar o destino do link.</p>
            <p>A <Code text='a' />  tag define um hiperlink, que é usado para vincular uma página a outra.</p>
            <p>O atributo mais importante do <Code text='a' /> elemento é o hrefatributo, que indica o destino do link. Por padrão, os links aparecerão da seguinte forma em todos os navegadores:</p>
            <ul className={styles.list}>
                <li><FiArrowRight /> Um link não visitado está sublinhado e azul</li>
                <li><FiArrowRight /> Um link visitado é sublinhado e roxo</li>
                <li><FiArrowRight />Um link ativo está sublinhado e vermelho</li>
            </ul>
            <MiniTitle title='Atributos da tag âncora' icon={<FcAdvertising />} />
            <AttributesHtml att='href'/>
            <AttributesHtml att='download'/>
            <AttributesHtml att='media'/>
            <AttributesHtml att='rel'/>
            <AttributesHtml att='target'/>
            <Title title='Abbr' id='abbr' />
            <p>A <Code text='abbr' /> tag define uma abreviação ou um acrônimo, como "HTML", "CSS", "Mr.", "Dr.", "ASAP", "ATM".</p>
            <p>Ao passar o mouse em cima, o texto da sigla aparecerá.</p>
            <p> <ImForward />Exemplo:</p>
            <p className={styles.result}>A linguagem de marcação <Code text='title="Hypertext Markup Language">HTML</abbr' /> é a linguagem usada na web.</p>
            <p> <ImForward />Resultado:</p>
            <p className={styles.result}>A linguagem de marcação <abbr title="Hypertext Markup Language">HTML</abbr> é a linguagem usada na web.</p>
            <Title  title='Break line' id='break-line'/>
            <p>O elemento HTML quebra-de-linha  <Code text='br' /> produz uma quebra de linha em um texto (carriage-return).É útil para escrever poemas ou um endereço, onde a divisão de linha é significante.</p>
            <p>Não use  <Code text='br' /> para aumentar o espaço entre as linhas de texto; para isso use a propiedade CSS margin ou o elemento  <Code text='p' />.</p>
            <Title title='Cite' id='cite' />
            <p>A <Code text='cite' /> tag define o título de um trabalho criativo (por exemplo, um livro, um poema, uma música, um filme, uma pintura, uma escultura, etc.).</p>
            <p>Nota: O nome de uma pessoa não é o título de uma obra.</p>
            <p>O texto no <Code text='cite' />elemento geralmente é renderizado em itálico.</p>
            <p>Use o atributo cite em um elemento <Code text='blockquote' /> ou <Code text='q' /> para referenciar uma fonte online.</p>
            <Title  title='Code' id='code' />
            <p>O elemento HTML <Code text='code' /> apresenta seu conteúdo estilizado de maneira a indicar que o texto é um pequeno fragmento de código. Por padrão,  o conteúdo é exibido utilizando a fonte monoespaçada padrão do user agent's (en-US).</p>
            <Title title='Quote' id='quote' />
            <p>O elemento HTML <Code text='q' /> indica que o texto dentro da tag é uma pequena citação. Este elemento destina-se a citações curtas que não requerem marcações de parágrafo; para citações maiores use o elemento <Code text='blockquote' />.</p>
            <Title id='samp' title='Samp' />
            <p>A <Code text='samp' /> tag é usada para definir a saída de amostra de um programa de computador. O conteúdo interno é exibido na fonte monoespaçada padrão do navegador.</p>
            <Title id='span' title='Span' />
            <p>O elemento HTML <Code text='span' /> é um conteiner generico em linha para conteúdo fraseado , que não representa nada por natureza. Ele pode ser usado para agrupar elementos para fins de estilo (usando os atributos class ou id ), ou para compartilhar valores de atributos como lang. Ele deve ser usado somente quando nenhum outro elemento semântico for apropriado. <Code text='span' /> é muito parecido com o elemento <Code text='div' /> , entretando <Code text='div' /> é um elemento de nível de block enquanto <Code text='span' /> é um elemento inline.</p>
            <Title title='Time' id='time' />
            <p>O elemento HTML time <Code text='time' /> representa o tempo tanto no formato de 24 horas ou como uma data precisa no calendário Gregoriano (com informações opcionais de tempo e fuso horário)</p>
            <p>Este elemento é destinado a apresentar datas e horas no dispositivo em um formato legível. Isto pode ser útil aos agentes do usuário em oferecer qualquer programação de eventos ao calendário do utilizador.</p>
            <MiniTitle title='Atributos da tag Time' icon={<FcAdvertising />} />
            <p><WordStyle font='bold'>time datetime="2008-02-14 20:00"</WordStyle> Esse atributo indica a hora e a data do elemento e deve ser uma data válida com uma string de tempo opcional. Se o valor não puder ser analisado como uma data com uma string de tempo opcional, o elemento não possui um timestamp associado.</p>
            <Title title='Var' id='var'/>
            <p>O <Code text='var' /> tag é usado para definir uma variável na programação ou em uma expressão matemática. O conteúdo dentro é normalmente exibido em itálico .</p>
            <Title title='Wbr' id='wbr' />
            <p>A <Code text='wbr' /> tag (Word Break Opportunity) especifica onde em um texto seria correto adicionar uma quebra de linha.</p>
            <p>Quando uma palavra é muito longa, o navegador pode quebrá-la no lugar errado. Você pode usar o <Code text='wbr' /> elemento para adicionar oportunidades de quebra de palavras.</p>
        </section>
    )
}

export default ContentInline