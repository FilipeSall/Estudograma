import React from "react";
import CodeBlock from "../../../CodeBlock/CodeBlock";
import SectionNotebook from "../../../notebookComponents/SectionNotebook";
import tag from '../../../../assets/imgs/tag.webp';

function IntroducaoHtml() {
    return (
        <SectionNotebook className="section-notebook-anime">
            <h1 id="oqueehtml" className="title">O que é HTML?</h1>
            <p>
                O HTML (Hypertext Markup Language) é a linguagem padrão utilizada na
                criação e estruturação de páginas web. O HTML é uma linguagem que usamos para criar páginas na internet. É como um plano ou esqueleto que diz ao navegador (como o Chrome ou o Firefox) como exibir a página para o usuário. Você pode pensar nisso como se estivesse criando um documento de texto - mas em vez de ser uma página que apenas você vê, é uma página que pode ser vista por qualquer pessoa na internet.
            </p>
            <p>
                Com o HTML, você pode criar títulos e parágrafos, adicionar imagens, links e outras coisas na sua página. Você faz isso usando "tags", que são basicamente palavras ou símbolos que indicam ao navegador o que você quer que ele exiba.
            </p>
            <p>
                O HTML é uma linguagem de marcação, o que significa que é composta por
                uma série de "tags" ou "elementos" que são usados para organizar e
                formatar o conteúdo de uma página web. As tags são colocadas entre
                sinais de menor e maior ({"<>"}), e geralmente vêm em pares, com uma tag
                de abertura e uma tag de fechamento. Por exemplo, a tag de abertura{" "}
                {"<p>"} e a tag de fechamento {"</p>"} são usadas para definir um
                parágrafo.
            </p>
            <p>Em um arquivo WORD, você apenas escreveria:</p>
            <CodeBlock>
                {`Isso é um parágrafo!`}
            </CodeBlock>
            <p>Mas em um arquivo HTML, você precisa abrir e fechar as TAGS:</p>
            <CodeBlock>
                {`<p> Isso é um parágrafo! </p>`}
            </CodeBlock>
            <img src={tag} alt='exemplo de tag html' className="img-example" />
            <p><strong>Conteúdo - </strong>
                As tags servem para inserirmos conteúdos como textos, imagens, vídeos e outros. Além da dar informações para o browser como o título do site, linguagem e outras.
            </p>
            <p><strong>Semântica - </strong>
            Dar sentido ao conteúdo, a escrita de um documento semântico beneficia principalmente leitores de tela (acessibilidade) e leitores de códigos (robôs como o do Google).
            </p>
            <p><strong>Interação com CSS e JavaScript - </strong>
            Através das marcações das tags que conseguimos selecionar elementos para mudarmos o seu estilo ou comportamento.
            </p>
            <p>
                Além de organizar o conteúdo, as tags HTML também podem incluir
                atributos que fornecem informações adicionais sobre o elemento ou que
                alteram seu comportamento. Por exemplo, a tag de imagem ({"<img>"})
                utiliza o atributo "src" para especificar o caminho do arquivo de imagem
                a ser exibido.
            </p>
            <p>
                O HTML é a base de todas as páginas da web e trabalha em conjunto com
                outras tecnologias, como CSS (Cascading Style Sheets) e JavaScript. O
                CSS é usado para estilizar e formatar a aparência das páginas web,
                enquanto o JavaScript adiciona interatividade e funcionalidades mais
                avançadas.
            </p>
            <p>
                Em resumo, o HTML é uma linguagem de marcação essencial para a criação
                de páginas web, permitindo que os desenvolvedores estruturem e organizem
                o conteúdo de forma eficiente e acessível. Com o conhecimento de HTML,
                juntamente com outras tecnologias web como CSS e JavaScript, os
                desenvolvedores podem criar páginas web ricas em recursos e visualmente
                atraentes para proporcionar uma excelente experiência ao usuário.
            </p>
            <h1 className="title" id="estruturahtml">A Estrutura Básica de uma Página HTML</h1>
            <p>A estrutura básica de um arquivo HTML é composta por duas partes principais: o cabeçalho (head) e o corpo (body).</p>
            <p>Para criar uma página HTML, você precisa seguir uma estrutura básica. A estrutura básica de uma página HTML é composta pelos seguintes elementos:</p>
            <div className="list-example syntax-highlighter-container">
                <p><span className="tag">&lt;!DOCTYPE html&gt;</span>: Declara o tipo de documento como HTML.</p>
                <p><span className="tag">&lt;html&gt;</span>: Define o início e o fim do documento HTML.</p>
                <p><span className="tag">&lt;head&gt;</span>: Contém informações sobre o documento, como título, meta tags e links para arquivos externos. O cabeçalho contém informações importantes sobre a página, como o título que aparece na aba do navegador, informações sobre a codificação do texto e outros metadados. O cabeçalho é definido entre as tags <span className="tag">&lt;head&gt;</span> e <span className="tag">&lt;/head&gt;</span>.</p>
                <p><span className="attr">&lt;meta charset="UTF-8"&gt;</span>: Define a codificação de caracteres para o documento.</p>
                <p><span className="tag">{`<title>`}</span>: Define o título da página que aparece na aba do navegador.</p>
                <p><span className="tag">{`<body>`}</span>: Contém todo o conteúdo visível da página, como textos, imagens, links e elementos de formulário.</p>
            </div>
            <CodeBlock>
                {`<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Seu Título</title>
</head>
<body>
  <h1>Olá, mundo!</h1>
  <p>Este é um exemplo de estrutura básica de uma página HTML.</p>
</body>
</html>`}
            </CodeBlock>
        <p>Resumindo, o conteúdo que ficará visível no navegador será todo conteúdo colocado no dentro da tag {`<body></body>`}. A tag {`<head>`} serve para colocar metadados e informações do site, como título, autor e configurações especiais.</p>
        </SectionNotebook>
    );
}

export default IntroducaoHtml;
