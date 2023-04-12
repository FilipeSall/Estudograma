import React from "react";
import CodeBlock from "../../../CodeBlock/CodeBlock";
import SectionNotebook from "../../../notebookComponents/SectionNotebook";

export default function ElementosHtml() {
    return (
        <SectionNotebook>
            <h1 id="headings" className="title">Titulos (h1-h6)</h1>
            <p>
                As Headings (títulos) são elementos essenciais no HTML, usados para
                estruturar e organizar o conteúdo de uma página web. Eles são
                representados pelas tags h1 a h6, sendo h1 a de maior importância e
                maior tamanho, e h6 a de menor importância e menor tamanho. Essas tags
                ajudam a dividir o conteúdo em seções hierárquicas, facilitando a
                leitura e a navegação.
            </p>
            <p>
                Imagine que você está criando um documento, como um artigo ou um
                relatório. Você provavelmente usaria títulos e subtítulos para dividir o
                conteúdo em seções. No HTML, as Headings servem a esse propósito. Por
                exemplo, o título principal do documento seria marcado com a tag h1,
                enquanto subtítulos ou tópicos secundários usariam h2. Se houver tópicos
                menores dentro de um subtítulo h2, você poderia usar h3, e assim por
                diante.
            </p>
            <p>
                As Headings também têm um papel importante na acessibilidade e na
                otimização para mecanismos de busca (SEO). Leitores de tela, usados por
                pessoas com deficiência visual, podem navegar facilmente pelo conteúdo
                com base na hierarquia das Headings. Além disso, os mecanismos de busca,
                como o Google, usam as Headings para entender a estrutura e o assunto
                principal de uma página, o que influencia diretamente na classificação
                da página nos resultados de busca.
            </p>
            <p>
                Ao usar as Headings, é importante manter uma estrutura consistente e
                lógica, evitando pular níveis (por exemplo, não usar h4 logo após h2).
                Isso garante uma melhor experiência para os usuários, tanto em termos de
                design quanto de acessibilidade e SEO.
            </p>
            <CodeBlock>
                {`<div>
    <h1>Titulo principal</h1>
    <p>texto generico para o titulo principal</p>
    <h2>Titulo de segunda hierarquia</h2>
    <p>Texto explicando a segunda etapa</p>
</div>`}
            </CodeBlock>
            <h1 className="title" id="paragrafo">Parágrafos (p)</h1>
            <p>Uma tag "p" em HTML é uma forma de criar um parágrafo de texto. Em outras palavras, é uma maneira de indicar para o navegador que você quer que o texto seja exibido como um bloco separado de informações. Por exemplo, se você quiser escrever um parágrafo de texto em uma página HTML, pode colocar esse texto entre as tags "p" de abertura e fechamento. O navegador então irá exibir esse texto como um bloco separado com espaço em branco acima e abaixo. As tags "p" são muito comuns em páginas web e são usadas para separar o texto em blocos, facilitando a leitura e a organização das informações na página.</p>
            <h1 className="title" id="br">Quebra de linha (br)</h1>
            <p>Quebra de linha, ou {'<br>'}, é uma tag HTML que indica uma quebra de linha simples. Ou seja, ao usar essa tag em um texto, o navegador irá inserir uma nova linha imediatamente após a tag.</p>
            <p>Essa tag é útil quando se deseja adicionar uma nova linha em um texto sem necessariamente criar um novo parágrafo. Por exemplo, ao escrever um endereço ou uma lista simples, pode ser mais adequado utilizar a tag {'<br>'} para separar os itens em linhas diferentes.</p>
            <p>Vale lembrar que a tag {'<br>'} não precisa de uma tag de fechamento, já que não envolve nenhum conteúdo. Basta apenas escrever {'<br>'} para que o navegador entenda que é uma quebra de linha.</p>
            <h1 className="title" id="enfase">Ênfase e importância (em, strong)</h1>
            <p>No HTML, as tags {'<em>'} e {'<strong>'} são usadas para enfatizar e destacar o texto em uma página.</p>
            <p>A tag {'<em>'} é usada para dar ênfase a uma palavra ou frase. Ela é geralmente exibida em itálico, para que a palavra ou frase se destaque do restante do texto. Por exemplo, se você quiser enfatizar a palavra "importante" em uma frase, você pode envolvê-la em uma tag {'<em>'}, assim:</p>
            <CodeBlock>
                {`<p>Este é um texto sobre uma informação <em>importante</em>.</p>
`}
            </CodeBlock>
            <p>"Este é um texto sobre uma informação <em>importante</em>."</p>
            <p>Já a tag {'<strong>'} é usada para destacar uma palavra ou frase com mais força do que a tag {'<em>'}. Ela é geralmente exibida em negrito, para que a palavra ou frase se destaque ainda mais do que as palavras em itálico da tag {'<em>'}. Por exemplo, se você quiser destacar uma frase em negrito, você pode envolvê-la em uma tag {'<strong>'}, assim:</p>
            <CodeBlock>{`<p>Por favor, <strong>leia atentamente</strong> as instruções antes de prosseguir.</p>`}</CodeBlock>
            <p>"Por favor, <strong>leia atentamente</strong> as instruções antes de prosseguir."</p>
            <p>Ambas as tags são importantes para melhorar a clareza e a legibilidade do texto na página. É importante usar essas tags com moderação e apenas onde elas são necessárias, para evitar que o texto fique muito marcado ou difícil de ler.</p>
            <h1 className="title" id="citacao">Citações (q, blockquote)</h1>
            <p>As citações são utilizadas em um texto para indicar uma fala ou pensamento de outra pessoa. No HTML, existem duas tags para citações: {'<q>'} e {'<blockquote>'}.</p>
            <p>A tag {'<q>'} é utilizada para indicar uma citação curta, geralmente de uma única frase ou trecho curto. Quando usamos a tag {'<q>'}, o texto citado é colocado entre as tags e aparece com aspas duplas ao redor.</p>
            <CodeBlock>{`<p>O professor disse: <q>O dever de casa é para amanhã.</q></p>
`}</CodeBlock>
            <p>A saída desse código seria:</p>
            <p>O professor disse: <q>O dever de casa é para amanhã.</q></p>
            <p>Já a tag {'<blockquote>'} é utilizada para citações mais longas, geralmente de vários parágrafos. Quando usamos a tag {'<blockquote>'}, o texto citado é indentado e aparece com um espaçamento maior em relação ao restante do texto.</p>
            <CodeBlock>{`<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan urna ut ex interdum, vel ultrices est suscipit. Integer ultrices nulla non elit malesuada, et tristique velit pulvinar.</p>
  <p>Nulla efficitur quam eu augue consequat vehicula. Maecenas scelerisque turpis vel felis dapibus, in auctor nulla bibendum. Nam ornare mauris libero, eget ultricies arcu bibendum id. Ut vel eleifend velit.</p>
</blockquote>
`}</CodeBlock>
            <p>A saída desse código seria:</p>
            <blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan urna ut ex interdum, vel ultrices est suscipit. Integer ultrices nulla non elit malesuada, et tristique velit pulvinar.</p>
                <p>Nulla efficitur quam eu augue consequat vehicula. Maecenas scelerisque turpis vel felis dapibus, in auctor nulla bibendum. Nam ornare mauris libero, eget ultricies arcu bibendum id. Ut vel eleifend velit.</p>
            </blockquote>
            <p>Ao usar as tags {'<q>'} e {'<blockquote>'}, estamos dando mais informações ao leitor sobre o texto que está sendo apresentado e ajudando a organizá-lo de forma mais clara e fácil de entender. Além disso, ao usar a tag {'<blockquote>'}, estamos dando destaque a uma parte importante do texto e ajudando o leitor a identificar visualmente essa informação.</p>
            <h1 className="title" id="code">Código e pré-formatação (code, pre)</h1>
            <p>Código e pré-formatação são duas funcionalidades importantes do HTML que permitem exibir texto de forma diferente.</p>
            <p>Código e pré-formatação são duas funcionalidades importantes do HTML que permitem exibir texto de forma diferente.
                A tag {'<code>'} é usada para indicar que o texto deve ser tratado como código. Isso é útil quando se está exibindo trechos de código em uma página web, pois o navegador pode diferenciar o texto do código. Ao usar a tag {'<code>'}, o texto é geralmente exibido em uma fonte mono espaçada, com um fundo diferente para ajudar a diferenciar o código do restante do texto.</p>
            <p>Por exemplo, se você quiser exibir um trecho de código em uma página HTML, pode colocar o código entre as tags {'<code>'} de abertura e fechamento. Como no exemplo abaixo, em que exibimos um trecho de código em Python:</p>
            <CodeBlock>{` <code> def hello_world(): print("Hello, World!") </code>`}</CodeBlock>
            <code> def hello_world(): print("Hello, World!") </code>
            <p>Já a tag {'<pre>'} é usada para exibir texto pré-formatado. Isso é útil quando se deseja exibir blocos de texto que devem manter sua formatação original, como um texto com várias linhas ou um trecho de código com indentação. Ao usar a tag {'<pre>'}, o texto é exibido exatamente como está no código, com a mesma formatação, espaços em branco, tabulações e quebras de linha.</p>
            <p>Por exemplo, se você quiser exibir um bloco de código com várias linhas em uma página HTML, pode colocar o código entre as tags {'<pre>'} de abertura e fechamento, como no exemplo abaixo:</p>
            <CodeBlock>{`<pre> # Exemplo de um bloco de código com várias linhas def foo(): for i in range(10): print(i) </pre>`}</CodeBlock>
            <pre>
                # Exemplo de um bloco de código com várias linhas
                def foo():
                for i in range(10):
                print(i)
            </pre>
        <p>É importante lembrar que as tags {'<code>'} e {'<pre>'} são apenas para exibir o texto de forma diferente. Se você quiser que o texto seja executado como um código, é necessário usar uma linguagem de programação para interpretar e executar o código.</p>
        </SectionNotebook>
    );
}
