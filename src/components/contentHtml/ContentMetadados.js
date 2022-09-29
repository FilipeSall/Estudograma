import React from 'react';
import Title from '../textFormat/Title';
import styles from './Content.module.css';
import { ImForward } from "react-icons/im";
import MiniTitle from '../textFormat/MiniTitle';
import { FcAdvertising } from "react-icons/fc";
import WordStyle from '../textFormat/WordStyle';
import AttributesHtml from '../attributes/AttributesHtml';

const ContentMetadados = () => {

    const meSignal = '<';
    const maSignal = '>';

    return (
        <section className={`${styles.content} + animationFromTop`}>
            <p>
                Os metadados são "dados sobre dados", utilizados para encontrar e descobrir recursos.
            </p>
            <p>
                Os metadados são onde se guardam várias informações sobre a página, incluindo informações sobre estilos, scripts e dados para auxiliar software para usar e renderizar a página. Os metadados de estilos e scripts podem ser definidos dentro da própria página ou escritos em um arquivo externo que é referênciado pela mesma.
            </p>
            <p>
                A tag <code>meta</code> define os metadados (informações) sobre um documento HTML. As tags <code>meta</code> sempre vao dentro da tag <code>head</code> e normalmente são usadas para especificar o conjunto de caracteres, descrição, palavras-chave, autor do documento e configurações da janela de visualização.
            </p>
            <Title title='Tag Base' id='base' />
            <p>O elemento HTML Base <code>{meSignal}base{maSignal}</code> especifica o endereço (URL) utilizada por todos os endereços relativos contidos dentro de um documento. Há um número máximo de 1 (um) elemento Base <code>{meSignal}base{maSignal}</code> do documento.</p>
            <p>
                <ImForward /> A <code>base</code> tag especifica a URL base e/ou destino para todas as URLs relativas em um documento.
            </p>
            <p>
                <ImForward />  A <code>base</code> tag deve ter um atributo href ou target presente, ou ambos.
            </p>
            <MiniTitle title='Atributos da tag Base' icon={<FcAdvertising />} />
            <AttributesHtml att='href' />
            <AttributesHtml att='target' />
            <Title title='Tag Head' id='head' />
            <p>O <code>head</code> elemento é um contêiner para metadados (dados sobre dados) e é colocado entre a tag <code>html</code> e a tag <code>body</code>.</p>
            <p>Os seguintes elementos podem ir dentro do {meSignal}head{maSignal} elemento:</p>
            <ul className={styles.list}>
                <li><code>title</code> (obrigatório em todo documento HTML)</li>
                <li><code>estilo</code></li>
                <li><code>base</code></li>
                <li><code>link</code></li>
                <li><code>meta</code></li>
                <li><code>script</code></li>
                <li><code>noscript</code></li>
            </ul>
            <p>
                Já um exemplo de uso da tag head para os navegadores, é o uso das meta-tags, como a meta-tag description, onde fornecemos uma descrição da página (é aquele texto explicativo que aparece nos resultados de busca do Google.
                (aprenderemos a criar um título e fazer a descrição de uma página de HTML nas próximas seções)
                </p>
            <p> 
                Uma outra grande utilidade da tag <code>{meSignal}head{maSignal}{meSignal}/head{maSignal}</code> na criação de um site, é que lá ficam localizados scripts, como de JavaScript.
            </p>
            <Title title='Tag link' id='link' />
            <p>
            O Elemento {meSignal}link{maSignal} especifica as relações entre o documento atual e um recurso externo. Possíveis usos para este elemento incluem a definição de uma estrutura relacional para navegação. Este elemento é mais usado para vincular as folhas de estilo.
            </p>
            <p>
            A tag <code>link</code> define o relacionamento entre o documento atual e um recurso externo. Também  é usada com mais frequência para vincular a folhas de estilo externas ou para adicionar um favicon ao seu site.
            </p>
            <p>
            O {meSignal}link{maSignal} é um elemento vazio, contém apenas atributos.
            </p>
            <p>{meSignal}<WordStyle font='bold'>link rel</WordStyle>="stylesheet" <WordStyle font='bold'>href=</WordStyle>"styles.css"{maSignal}</p>
            <MiniTitle  title='Atributos da tag Link' icon={<FcAdvertising />} />
            <AttributesHtml att='as' />
            <AttributesHtml att='crossorigin' />
            <AttributesHtml att='href' />
            <AttributesHtml att='media' />
            <AttributesHtml att='referrerpolicy' />
            <AttributesHtml att='rel' />
            <Title title='Tag Meta' id='meta' />
            <p>A {meSignal}meta{maSignal} tag define metadados sobre um documento HTML. Metadados são dados (informações) sobre dados.</p>
            <p>{meSignal}meta{maSignal} tags sempre vão dentro do elemento {meSignal}head{maSignal} e normalmente são usadas para especificar o conjunto de caracteres, descrição da página, palavras-chave, autor do documento e configurações da janela de visualização.</p>
            <p>
            Os metadados não serão exibidos na página, mas podem ser analisados por máquina.
            </p>
            <p>
            Os metadados são usados ​​por navegadores (como exibir conteúdo ou recarregar a página), mecanismos de pesquisa (palavras-chave) e outros serviços da web.
            </p>
            <MiniTitle title='Atributos da tag Meta' icon={<FcAdvertising />} />
            <AttributesHtml att='title' />
            <AttributesHtml att='description' />
            <AttributesHtml att='charset' />
            <AttributesHtml att='keywords' />
            <AttributesHtml att='author' />
        </section>
    )
}

export default ContentMetadados