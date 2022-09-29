import React from 'react';
import Code from '../textFormat/Code';
import Title from '../textFormat/Title';
import styles from './Content.module.css';
import { FiArrowRight } from "react-icons/fi";
import Image from '../textFormat/Image';
import MiniTitle from '../textFormat/MiniTitle';
import AttributesHtml from '../attributes/AttributesHtml';
import area from '../../common/assets/images/html/multimidia/area.png';
import { FcAdvertising } from "react-icons/fc";
import { ImForward } from "react-icons/im";

const ContentMultimidia = () => {
    return (
        <section className={`${styles.content} + animationFromTop`}>
            <p>Além do normal de multimídia, o HTML pode incluir uma variedade de conteúdos, embora nem todos os conteúdos possuam outros conteúdos de fácil interação.</p>
            <Title title='Area' id='area' />
            <p>O HTML <Code text='area' /> elemento define uma região hot-spot em uma imagem, e, opcionalmente, associa-lo com um link de hipertexto. Este elemento é usado somente dentro de um <Code text='area' /> elemento.</p>
            <p><FiArrowRight /> As categorias de conteúdo de conteúdo de fluxo , conteúdo fraseado .</p>
            <p><FiArrowRight /> Permitida conteúdo vazio.</p>
            <p><FiArrowRight />  Permitida elementos pai Qualquer elemento que aceita conteúdo fraseado . O <Code text='area' /> elemento deve ter um ancestral <Code text='map' />, mas ele não precisa ser um pai direta.</p>
            <p><FiArrowRight />  Interface DOM HTMLAreaElement.</p>
            <p>A <Code text='area' /> tag define uma área dentro de um mapa de imagem (um mapa de imagem é uma imagem com áreas clicáveis).</p>
            <p><Code text='area' /> os elementos são sempre aninhados dentro de uma <Code text='map' /> tag.</p>
            <p>O usemap em <Code text='img' /> está associado ao atributo <Code text='map' /> do elemento name e cria um relacionamento entre a imagem e o mapa.</p>
            <Image src={area} alt='Exemplo de area com map' />
            <MiniTitle title='Atributos da tag Area' icon={<FcAdvertising />} />
            <AttributesHtml att='alt' />
            <AttributesHtml att='coords' />
            <AttributesHtml att='href' />
            <AttributesHtml att='media' />
            <AttributesHtml att='rel' />
            <AttributesHtml att='shape' />
            <AttributesHtml att='target' />
            <AttributesHtml att='type' />
            <Title title='Audio' id='audio' />
            <p>A <Code text='audio' /> tag é usada para incorporar conteúdo de som em um documento, como música ou outros fluxos de áudio.</p>
            <p>A <Code text='audio' /> tag contém uma ou mais <Code text='source' />tags com diferentes fontes de áudio. O navegador escolherá a primeira fonte que ele suporta.</p>
            <p>O texto entre as tags  <Code text='audio' /> e  <Code text='/audio' /> só será exibido em navegadores que não suportam o elemento <Code text='audio' /> .</p>
            <p>Existem três formatos de áudio suportados em HTML: MP3, WAV e OGG.</p>
            <MiniTitle title='Atributos da tag Audio' icon={<FcAdvertising />} />
            <AttributesHtml att='autoplay' />
            <AttributesHtml att='controls' />
            <AttributesHtml att='loop' />
            <AttributesHtml att='muted' />
            <AttributesHtml att='preload' />
            <Title title='Img' id='img' />
            <p>A <Code text='img' /> tag é usada para incorporar uma imagem em uma página HTML.</p>
            <p>As imagens não são tecnicamente inseridas em uma página da web; as imagens estão vinculadas a páginas da web. A <Code text='img' /> tag cria um espaço de retenção para a imagem referenciada.</p>
            <p>A <Code text='img' /> tag tem dois atributos obrigatórios:</p>
            <AttributesHtml att='src' />
            <AttributesHtml att='alt' />
            <p>Além disso, sempre especifique a largura e a altura de uma imagem. Se a largura e a altura não forem especificadas, a página poderá piscar enquanto a imagem é carregada.
            </p>
            <p>Para vincular uma imagem a outro documento, simplesmente aninhe a <Code text='img' /> tag dentro de uma tag <Code text='a' />.</p>
            <MiniTitle title='Mais atributos da tag Img' icon={<FcAdvertising />} />
            <AttributesHtml att='crossorigin' />
            <AttributesHtml att='ismap' />
            <AttributesHtml att='loading' />
            <AttributesHtml att='referrerpolicy' />
            <AttributesHtml att='srcset' />
            <AttributesHtml att='usemap' />
            <Title title='Map' id='map' />
            <p>A <Code text='map' /> tag é usada para definir um mapa de imagem. Um mapa de imagem é uma imagem com áreas clicáveis.</p>
            <p>O atributo name obrigatório do <Code text='map' /> elemento está associado ao atributo usemap do  e cria um relacionamento entre a imagem e o mapa.</p>
            <p>O <Code text='map' /> elemento contém vários elementos , que definem as áreas clicáveis no mapa de imagem.</p>
            <MiniTitle title='Atributos da tag Map' icon={<FcAdvertising />} />
            <AttributesHtml att='name' />
            <Title title='Track' id='track' />
            <p>A <Code text='track' /> tag especifica faixas de texto para elementos <Code text='audio' /> ou <Code text='video' /> .</p>
            <p>Este elemento é usado para especificar legendas, arquivos de legendas ou outros arquivos contendo texto, que devem estar visíveis durante a reprodução da mídia.</p>
            <p>As faixas são formatadas no formato WebVTT (arquivos .vtt).</p>
            <MiniTitle title='Atributos da tag Track' icon={<FcAdvertising />} />
            <AttributesHtml att='default' />
            <AttributesHtml att='kind' />
            <AttributesHtml att='label' />
            <AttributesHtml att='src' />
            <AttributesHtml att='srclang' />
            <MiniTitle icon={<ImForward />} title='Exemplo de sintaxe da tag track com video:' />
            <p><Code text='video width="320" height="240" controls' /></p>
            <p><Code text='source src="forrest_gump.mp4" type="video/mp4"' /></p>
            <p><Code text='source src="forrest_gump.ogg" type="video/ogg"' /></p>
            <p><Code text='track src="fgsubtitles_en.vtt" kind="subtitles" srclang="en" label="English"' />
            </p>
            <p><Code text='track src="fgsubtitles_no.vtt" kind="subtitles" srclang="no" label="Norwegian"' /></p>
            <p><Code text='/video' /></p>
            <Title title='Video' id='video' />
            <p>A <Code text='video'/> tag é usada para incorporar conteúdo de vídeo em um documento, como um clipe de filme ou outros fluxos de vídeo.</p>
            <p>A <Code text='video'/> tag contém uma ou mais tags com diferentes origens de vídeo. O navegador escolherá a primeira fonte que ele suporta.</p>
            <p>O texto entre as tags <Code text='video'/> e só será exibido em navegadores que não suportam o elemento <Code text='video'/></p>
            <p>Existem três formatos de vídeo suportados em HTML: MP4, WebM e OGG.</p>
            <MiniTitle title='Atributos da tag Video' icon={<FcAdvertising />} />
            <AttributesHtml att='autoplay' />
            <AttributesHtml att='controls' />
            <AttributesHtml att='loop' />
            <AttributesHtml att='muted' />
            <AttributesHtml att='poster' />
            <AttributesHtml att='preload' />
            <AttributesHtml att='src' />
        </section>
    )
}

export default ContentMultimidia