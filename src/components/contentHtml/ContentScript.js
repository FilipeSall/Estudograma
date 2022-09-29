import React from 'react';
import Code from '../textFormat/Code';
import Title from '../textFormat/Title';
import styles from './Content.module.css';
import { ImForward } from "react-icons/im";
import { FcAdvertising } from "react-icons/fc";
import Image from '../textFormat/Image';
import source from '../../common/assets/images/html/script/source.png'
import MiniTitle from '../textFormat/MiniTitle';
import AttributesHtml from '../attributes/AttributesHtml';

const ContentScript = () => {
  return (
    <section className={`${styles.content} + animationFromTop`}>
      <p>Com o intuito de permitir a criação de conteúdo com aplicações Web, HTML foi projetado com suporte a ferramentas de scripting, sendo mais promininte sendo JavaScript. Certos elementos suportam essa capacidade.</p>
      <Title title='Canvas' id='canvas' />
      <p>O elemento HTML Canvas (<Code text='canvas' />) pode ser utilizado para desenhar gráficos usando scripts (geralmente JavaScript ). Por exemplo, além de desenhar gráficos, ele pode ser usado para fazer composições de fotos e também para animações. Você poderá colocar conteúdos alternativos dentro do bloco <Code text='canvas' />. Este conteúdo será exibido também em navegadores antigos e em navegadores com JavaScript desabilitado.
      </p>
      <Title title='Noscropt' id='noscript' />
      <p>O Elemento HTML <Code text='noscript' /> define uma seção de html a ser inserida se um tipo de script não é suportado pela página ou se o script está desativado no navegador.</p>
      <p><ImForward /> Categorias de conteúdo Metadata content, flow content, phrasing content.</p>
      <p><ImForward /> Conteúdo permitido quando scripting está desabilitado e quando este é um descendente do elemento head : em qualquer ordem, de zero ou mais elementos link, zero ou mais elementos style, e zero ou mais elementos meta. Quando o script está desativado e quando não é descendente do elemento head : qualquer conteúdo transparente, mas nenhum elemento noscript entre seus descendentes. Nos outros casos: conteúdo de fluxo ou conteúdo de texto.</p>
      <p><ImForward /> Omissão da tagTags inicial e final obrigatórias. </p>
      <p><ImForward /> Elemento pai permitidos Qualquer elemento que aceite 'contúdo de texto' (phrasing content), se não há um elemento noscript anterior ou em um elemento head (mas somente em um documento HTML), e também se não existe elemento noscript anterior.</p>
      <p><ImForward /> Interface DOM HTMLElement.</p>
      <Image src={source} alt='exemplo de interface DOM com noscript' />
      <Title title='Script' id='script' />
      <p>O elemento HTML <Code text='script'/> é usado para incluir ou referenciar um script executável.</p>
      <p>A <Code text='script'/>  é usada para incorporar um script do lado do cliente (JavaScript).</p>
      <p>O  <Code text='script'/> contém instruções de script ou aponta para um arquivo de script externo por meio do atributo src.</p>
      <MiniTitle icon={<FcAdvertising />} title='Atributos da tag Script' />
      <AttributesHtml att='async'/>
      <AttributesHtml att='crossorigin'/>
      <AttributesHtml att='defer'/>
      <AttributesHtml att='integrity'/>
      <AttributesHtml att='src'/>
      <AttributesHtml att='nomodule'/>
      <AttributesHtml att='text'/>
      <AttributesHtml att='type='/>
    </section>
  )
}

export default ContentScript