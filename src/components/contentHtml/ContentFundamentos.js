import React from 'react'
import '../../App.css'
import Image from '../textFormat/Image';
import Title from '../textFormat/Title'
import styles from './Content.module.css';
import pic1 from '../../common/assets/images/html/fundamentos/pic1.png';
import pic2 from '../../common/assets/images/html/fundamentos/pic2.png';
import pic3 from '../../common/assets/images/html/fundamentos/pic3.png';
import WordStyle from '../textFormat/WordStyle';
import { FcAdvertising } from "react-icons/fc";
import { ImForward } from "react-icons/im";
import MiniTitle from '../textFormat/MiniTitle';



const ContentFundamentos = () => {

    const meSignal = '<';
    const maSignal = '>';

    return (
        <section className={`${styles.content} + animationFromTop`}>
            <Title title='O que é HTML' id='o-que-é-HTML' />
            <p>
                HTML, ou Hyper Markup Text Language é uma linguagem de marcação (não programação) da web. Toda vez
                que você carrega uma página da web, você carrega um código HTML.
            </p>
            <p>
                Um elemento HTML é separado de outro texto em um documento por "tags", que consistem no nome do elemento entre {meSignal} e {maSignal}.
            </p>
            <p>
                O nome de um elemento dentro de uma tag é insensível a maiúsculas e minúsculas. Isto é, pode ser escrito em maiúsculas, minúsculas ou um mistura. Por exemplo, a tag {meSignal} title {maSignal} pode ser escrita como {meSignal}Title{maSignal}, {meSignal}TITLE{maSignal} ou de qualquer outra forma, mas é boa prática escrever com minúsculas.
            </p>
            <Image src={pic1} alt='Anatomia HTML' />
            <p>
                <ImForward /> <WordStyle font='bold'>A tag de abertura:</WordStyle> Consiste no nome do elemento (no caso, p), envolvido em parênteses angulares de abertura e fechamento. Isso demonstra onde o elemento começa, ou onde seu efeito se inicia — nesse caso, onde é o começo do parágrafo.</p>
            <p>
                <ImForward /> <WordStyle font='bold'>A tag de fechamento:</WordStyle> Isso é a mesma coisa que a tag de abertura, exceto que inclui uma barra antes do nome do elemento. Isso demonstra onde o elemento acaba — nesse caso, onde é o fim do parágrafo. Esquecer de incluir uma tag de fechamento é um dos erros mais comuns de iniciantes e pode levar a resultados estranhos.
            </p>
            <p>
                <ImForward /> <WordStyle font='bold'>O conteúdo:</WordStyle> O conteúdo é tudo que está entre as tags e é o que será mostrado na tela para o usuário, além da dar informações para o browser como o título do site, linguagem e outras.
            </p>
            <p>
                <ImForward /> <WordStyle font='bold'>O elemento:</WordStyle> A tag de abertura, a de fechamento e o conteúdo formam o elemento que pode ser manipulado ou possuir funções através de atributos.
            </p>
            <MiniTitle title='Atributos HTML' icon={<FcAdvertising />} />
            <p>
                Atributos contém informação extra sobre o elemento que você não quer que apareça no conteúdo real. Aqui, <WordStyle font='italic'>class</WordStyle> é o nome do atributo e <WordStyle font='italic'>editor-note</WordStyle> é o valor do atributo. O atributo <WordStyle font='italic'>class</WordStyle> permite que você forneça ao elemento um identificador que possa ser usado posteriormente para aplicar ao elemento informações de estilo e outras coisas.
            </p>
            <Image src={pic2} alt='Exemplo atributo html' />
            <p>Um atributo sempre deve ter:</p>
            <ul className={styles.list}>
                <li>Um espaço entre ele e o nome do elemento (ou o atributo anterior, se o elemento já tiver um).</li>
                <li>O nome do atributo, seguido por um sinal de igual.</li>
                <li>Aspas de abertura e fechamento, envolvendo todo o valor do atributo.</li>
            </ul>
            <MiniTitle title='Aninhamento de tags' icon={<FcAdvertising />} />
            <p>
                A maneira mais fácil de entender o aninhamento é pensar nas tags HTML como caixas que armazenam seu conteúdo. Seu conteúdo pode incluir texto, imagens, etc. As tags HTML são as caixas ao redor do conteúdo. Às vezes, você precisa colocar caixas dentro de outras caixas. Essas caixas "internas" estão aninhadas dentro de outras.
            </p>
            <ul className={styles.list}>
                <li><code>{meSignal} Elemento pai {maSignal}</code></li>
                <li><code>{meSignal} Elemento filho {maSignal}</code></li>
                <li><code>{meSignal} /Elemento Pai {maSignal}</code></li>
            </ul>
            <MiniTitle title='Elementos vazios' icon={<FcAdvertising />} />
            <p>
                Um elemento vazio é um componente que não possui elementos incorporados ou elementos de texto. Os elementos vazios não possuem nós sucessores. Em outras palavras, as tags que não contêm nenhuma tag de fechamento são tags vazias. As tags vazias contêm apenas a tag de abertura, mas executam alguma ação na página da web.

            </p>
            <p>
                Um elemento que não possui uma tag delimitadora é chamado de elemento vazio . Adicionar as tags de fechamento aos elementos vazios será uma sintaxe inválida. Os elementos vazios não possuem nenhum nó filho. Resumindo, os elementos vazios são de fechamento automático ou nulos e não são tags de contêiner. Os elementos vazios são usados ​​para incorporar imagens, listas, quebras, linhas horizontais, hiperlinks, para entrada, metadados, área, etc. Por exemplo, a marca {meSignal} p {maSignal} tem uma marca de fechamento, portanto, não é um elemento vazio.
            </p>
            <ul className={styles.list}>
                <li><code>{meSignal} img src='' /{maSignal} </code></li>
            </ul>
            <Title title='Anatomia de um aqruivo HTML' id='anatomia-arquivo' />
            <p>
            Um documento HTML válido precisa seguir obrigatoriamente a estrutura composta pelas tags html, head e body e a instrução !DOCTYPE. Esta estrutura está informada em uma documentação que descreve todos os detalhes do HTML, no caso as tags e atributos, e como os navegadores devem considerar e interpretar estas tags, esta documentação é chamada de "especificação do HTML", e através do que está declarado nela que é possível entender se um documento HTML válido. Um documento HTML inválido é carregado pelo navegador, porém em um "modo de compatibilidade", 
            </p>
            <p>
            <WordStyle font='bold'>{meSignal}!DOCTYPE html{maSignal}</WordStyle> — o doctype. É a parte inicial obrigatória do documento. Nas névoas do tempo, quando o HTML era novo (por volta de 1991/2), doctypes eram criados para agir como links para um conjunto de regras que a página HTML tinha que seguir para ser considerada um bom HTML, o que poderia significar checagem automática de erros e outras coisas úteis. No entanto, atualmente, eles não fazem muito sentido e são basicamente necessários apenas para garantir que o documento se comporte corretamente.
            </p>
            <p> 
            <WordStyle font='bold'>{meSignal}html{maSignal} {meSignal}/html{maSignal}</WordStyle> - o elemento html. Esse elemento envolve todo o conteúdo da página e às vezes é conhecido como o elemento raiz.
            </p>
            <p>
            <WordStyle font='bold'>{meSignal}head{maSignal} {meSignal}/head{maSignal}</WordStyle> - o elemento head. Esse elemento age como um recipiente de tudo o que você deseja incluir em uma página HTML que não é o conteúdo que você quer mostrar para quem vê sua página. Isso inclui coisas como palavras-chave e uma descrição que você quer que apareça nos resultados de busca, CSS para dar estilo ao conteúdo, declarações de conjuntos de caracteres e etc.
            </p>
            <p>
            <WordStyle font='bold'>{meSignal}meta charset = "utf-8"{maSignal}</WordStyle> - esse elemento define o conjunto de caracteres que seu documento deve usar para o UTF-8, que inclui praticamente todos os caracteres da grande maioria dos idiomas escritos. Essencialmente, agora ele pode manipular qualquer conteúdo textual que você possa colocar. Não há razão para não definir isso e assim pode ajudar a evitar alguns problemas no futuro.
            </p>
            <p>
            <WordStyle font='bold'>{meSignal}title{maSignal} {meSignal}/title{maSignal}</WordStyle> - o elemento title. Ele define o título da sua página, que é o título que aparece na guia do navegador onde sua página é carregada. Ele também é usado para descrever a página quando você a adiciona aos favoritos.
            </p>
            <p>
            <WordStyle font='bold'>{meSignal}body{maSignal} {meSignal}/body{maSignal}</WordStyle> - o elemento body. Contém todo o conteúdo que você quer mostrar ao público que visita sua página, seja texto, imagens, vídeos, jogos, faixas de áudio reproduzíveis ou qualquer outra coisa.
            </p>
            <Image src={pic3} alt='exemplo de estrutura html'/>
        </section>
    )
}

export default ContentFundamentos