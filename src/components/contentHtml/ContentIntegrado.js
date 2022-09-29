import React from 'react';
import Code from '../textFormat/Code';
import MiniTitle from '../textFormat/MiniTitle';
import Title from '../textFormat/Title';
import styles from './Content.module.css';
import { FcAdvertising } from "react-icons/fc";
import AttributesHtml from '../attributes/AttributesHtml';
import Image from '../textFormat/Image';
import source from '../../common/assets/images/html/conteudoIntegrado/source.png';

const ContentIntegrado = () => {
    return (
        <section className={`${styles.content} + animationFromTop`}> 
            <p>Além do normal de multimídia, o HTML pode incluir uma variedade de conteúdos, embora nem todos os conteúdos possuam outros conteúdos de fácil interação.</p>
            <Title title='Iframe' id='iframe' />
            <p>A <Code text='iframe' /> tag especifica um quadro embutido.</p>
            <p>Um quadro embutido é usado para incorporar outro documento no documento HTML atual.</p>
            <p>É uma boa prática sempre incluir um atributo title para o arquivo <Code text='iframe' />. Isso é usado por leitores de tela para ler qual é o conteúdo do arquivo <Code text='iframe' />.</p>
            <MiniTitle icon={<FcAdvertising />} title='Atributos da tag Iframe' />
            <AttributesHtml att='allow' />
            <AttributesHtml att='allowfullscreen' />
            <AttributesHtml att='allowpaymentrequest' />
            <AttributesHtml att='name' />
            <AttributesHtml att='referrerpolicy' />
            <AttributesHtml att='sandbox' />
        <Title title='Picture' id='picture' />
        <p>A tag <Code text='picture'/>  oferece aos desenvolvedores da Web mais flexibilidade na especificação de recursos de imagem.</p>
        <p>O uso mais comum do <Code text='picture'/> será para direção de arte em designs responsivos. Em vez de ter uma imagem que é dimensionada para cima ou para baixo com base na largura da janela de visualização, várias imagens podem ser projetadas para preencher melhor a janela de visualização do navegador.</p>
       <p>O <Code text='picture'/> contém duas tags: uma ou mais tags <Code text='source'/> e uma tag <Code text='img'/> .</p>
       <p>O navegador procurará o primeiro elemento source onde a consulta de mídia corresponde à largura da janela de visualização atual e, em seguida, exibirá a imagem adequada (especificada no atributo srcset). O elemento <Code text='img'/> é necessário como o último filho do <Code text='picture'/>, como uma opção de fallback se nenhuma das tags de origem corresponder.</p>
       <p>O <Code text='picture'/> funciona "semelhante" a <Code text='video'/> e <Code text='audio'/> . Você configura fontes diferentes e a primeira fonte que se ajusta às preferências é a que está sendo usada.</p>
       <Title id='source' title='Source' />
       <p>A <Code text='source'/> tag é usada para especificar vários recursos de mídia para elementos de mídia, como <Code text='video'/>.</p>
       <p>A <Code text='source'/> tag permite que você especifique arquivos alternativos de vídeo/áudio/imagem que o navegador pode escolher, com base no suporte do navegador ou na largura da janela de visualização. O navegador escolherá o primeiro <Code text='source'/> que ele suporta.</p>
       <p>É um elemento vazio. É normalmente usado para disponibilizar vários formatos suportados por diferentes navegadores .</p>
       <Image src={source} alt='exemplo de tag source' />
       <MiniTitle icon={<FcAdvertising />} title='Atributos da tag Source' />
       <AttributesHtml att='media' />
       <AttributesHtml att='sizes' />
       <AttributesHtml att='src' />
       <AttributesHtml att='srcset' />
       <AttributesHtml att='type' />
        </section>
    )
}

export default ContentIntegrado