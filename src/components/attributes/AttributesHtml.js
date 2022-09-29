import React from 'react';
import WordStyle from '../textFormat/WordStyle';
import styles from './Attributes.module.css';
import { GoArrowSmallRight } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";
import Image from '../textFormat/Image';
import module from '../../common/assets/images/html/script/scriptModule.png';

const AttributesHtml = ({ att }) => {

    const meSignal = '<';
    const maSignal = '>';

    return (
        <div className={styles.attContainer}>
            {att === 'alt' ?
                <ul className={styles.list}>
                    <li>
                        <WordStyle font='bold'>Alt: </WordStyle> Uma alternativa seqüência de texto para exibir em navegadores que não exibem imagens. O texto deve ser formulada de modo a que apresenta o usuário com o mesmo tipo de escolha como a imagem iria oferecer quando exibido sem o texto alternativo. Em HTML5, este atributo é necessário apenas se o href atributo é usado.
                    </li>
                </ul> : null}
            {att === 'enctype' ?
                <ul className={styles.list}>
                    <li>
                        <WordStyle font='bold'>Enctype : </WordStyle> especifica como os dados do formulário devem ser codificados ao envia-los ao servidor. O enctype só pode ser usado se tiver o atributo method="post".Ao utilizar o enctype, escrever: enctype="multipart/form-data".
                    </li>
                </ul> : null}
            {att === 'action' ?
                <ul className={styles.list}>
                    <li>
                        <WordStyle font='bold'>Action: </WordStyle> Especifica onde enviar os dados do formulário quando o mesmo for enviado pelo usuário.
                    </li>
                </ul> : null}
            {att === 'method' ?
                <ul className={styles.list}>
                    <li>
                        <WordStyle font='bold'>Method : </WordStyle> especifica como enviar dados de formulário. Os dados do formulário podem ser eviados como variáveis URL (com method="get") ou como transação de postagem HTTP (com o method="post").
                        <p>Observações sobre o GET:</p>
                        <ul className={styles.farList}>
                            <li><GoArrowSmallRight />Anexa dados de forumlários em pares de nome/valor.</li>
                            <li><GoArrowSmallRight />O comprimento de um URL é limitado (cerca de 3000 caracteres).</li>
                            <li><GoArrowSmallRight />Nunca use GET para enviar dados confidenciais (será visível no URL).</li>
                            <li><GoArrowSmallRight />Útil para envios de forumlários onde o usuário deseja marcar o resultado.</li>
                            <li><GoArrowSmallRight />GET é o melhor para dados não seguros, como strings de consulta no google.</li>
                        </ul>
                        <p>Observações sobre o POST:</p>
                        <ul>
                        <li><GoArrowSmallRight />Anexa dados de formulário dentro do corpo da solicitação HTTP (os dados não são mostrados).</li>
                        <li><GoArrowSmallRight />Não tem limite de tamanho.</li>
                        <li><GoArrowSmallRight />Envio de forumlários com POST não podem ser marcados.</li>
                        </ul>
                    </li>
                </ul> : null}
            {att === 'autocomplete' ?
                <ul className={styles.list}>
                    <li>
                        <WordStyle font='bold'>Autocomplete : </WordStyle> especifica se um formulário deve ter o preenchimento automático ou desativado. Quando está ativado, o navegador completa automaticamente os valores com base nos valores que o usuário inseriu anteriormente. O padrão é o 'on'. Para alterar, colocar 'off' no autocomplete.
                    </li>
                </ul> : null}
            {att === 'accept-charset' ?
                <ul className={styles.list}>
                    <li>
                        <WordStyle font='bold'> Accept-charset": </WordStyle> Uespecifica as codificações de caracteres que devem ser usadas para o envio do formulário. O padrão é a string reservada "UNKNOWN", neste caso, a codificação corresponde à codificação do documentto que contém o formulário.
                    </li>
                    <li>Caso queira tirar o "UNKNOW", escrever: accept-charset="character_set"</li>
                </ul> : null}
            {att === 'coords' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Coords: </WordStyle> Um conjunto de valores que especificam as coordenadas da região de hot-spot. O número e o significado dos valores dependem do valor especificado para a forma de atributo. Para um retângulo, o coords valor é de dois pares x, y: left, top, right, e bottom. Para um círculo forma, o valor é x, y, r onde x, y é um par especificando o centro do círculo e r é um valor para o raio. Para um poli ou polígono, o valor é um conjunto de pares x, y de cada ponto no polígono: X1, Y1, X2, Y2, x3, y3, e assim por diante.</li>
                </ul> : null}

            {att === 'href' ?
                <ul className={styles.list}>
                    <li>
                        <WordStyle font='bold'>Href </WordStyle> : O <code>href</code> especifica a URL base para todas as URLs relativas em uma página.
                    </li>
                    <p> <FiArrowRight /> Sintaxe: <WordStyle font='italic'> href="URL"</WordStyle> </p>
                </ul> : null}
            {att === 'target' ?
                <ul className={styles.list}>
                    <li>
                        <WordStyle font='bold'>Target </WordStyle> : O <code>target</code> especifica o destino padrão para todos os hiperlinks e formulários na página.
                    </li>
                    <li> <FiArrowRight /> Sintaxe : <WordStyle font='italic'>target="_blank|_self|_parent|_top"</WordStyle> </li>
                    <li><FiArrowRight /> Valores:  </li>
                    <ul className={styles.farList}>
                        <li><GoArrowSmallRight /> _blank - Abre o link em uma nova janela ou guia</li>
                        <li><GoArrowSmallRight /> _self - Predefinição. Abre o link na mesma janela em que foi clicado</li>
                        <li><GoArrowSmallRight /> _parent - Abre o link no quadro pai</li>
                        <li><GoArrowSmallRight /> _top - Abre o link no corpo inteiro da janela</li>
                    </ul>
                </ul> : null}
            {att === 'as' ?
                <ul className={styles.list}>
                    <li>
                        <WordStyle font='bold'>As </WordStyle> : Esse atributo é usado apenas quando rel="preload" foi enviado no elemento. Especifica o tipo de conteúdo carregado pelo elemento, que é necessário para a priorização do conteúdo, solicitação de correspondência, aplicação de política de segurança de conteúdo correta, e configuração do cabeçalho de pedido Accept correta.
                    </li>
                </ul> : null}
            {att === 'crossorigin' ? <ul className={styles.list}>
                <li> <WordStyle font='bold'>Crossorigin</WordStyle>:
                    Especifica como o elemento lida com solicitações de origem cruzada
                </li>
                <li>
                    <FiArrowRight /> Valores:
                </li>
                <ul className={styles.farList}>
                    <li>
                        <GoArrowSmallRight />anonymous
                    </li>
                    <li>
                        <GoArrowSmallRight />use-credentials
                    </li>
                </ul>
            </ul> : null}
            {att === 'media' ?
                <ul className={styles.list}>
                    <li>
                        <WordStyle font='bold'>Media</WordStyle>:O atributo media especifica para qual mídia/dispositivo o recurso de destino é otimizado. Esse atributo é usado principalmente com folhas de estilo CSS para especificar estilos diferentes para diferentes tipos de mídia. Esse atributo pode aceitar vários valores.
                    </li>
                    <li> <FiArrowRight /> Sintaxe : <WordStyle font='italic'>{meSignal}link media="value"{maSignal}</WordStyle> </li>
                    <li><FiArrowRight /> Valores: </li>
                    <li>
                        <ul className={styles.farList}>
                            <li><GoArrowSmallRight /> Aspect-ratio: Especifica a proporção largura/altura da área de exibição de destino.
                                Os prefixos "min-" e "max-" podem ser usados. Exemplo: media="screen and (max-aspect-ratio:16/9)
                                "</li>
                            <li>
                                <GoArrowSmallRight /> Color: Especifica os bits por cor da exibição de destino.
                                Os prefixos "min-" e "max-" podem ser usados.
                                Exemplo: media="tela e (min-color:3)"
                            </li>
                            <li>
                                <GoArrowSmallRight /> Color-index: Especifica o número de cores que a exibição de destino pode manipular.
                                Os prefixos "min-" e "max-" podem ser usados.
                                Exemplo: media="tela e (min-color-index:256)"
                            </li>
                            <li>
                                <GoArrowSmallRight /> Grid: Especifica se o dispositivo de saída é grade ou bitmap.
                                Os valores possíveis são "1" para grade e "0" caso contrário.
                                Exemplo: media="handheld e (grid:1)"
                            </li>
                            <li>
                                <GoArrowSmallRight /> Height: Especifica a altura da área de exibição de destino.
                                Os prefixos "min-" e "max-" podem ser usados.
                                Exemplo: media="screen and (max-height:700px)"
                            </li>
                            <li>
                                <GoArrowSmallRight /> Scan: Especifica o método de varredura de uma tela de TV.
                                Os valores possíveis são "progressivo" e "entrelaçado".
                                Exemplo: media="tv and (scan:interlace)"
                            </li>
                            <li>
                                <GoArrowSmallRight /> Width: Especifica a largura da área de exibição de destino.
                                Os prefixos "min-" e "max-" podem ser usados.
                                Exemplo: media="screen and (min-width:500px)"
                            </li>
                        </ul>
                    </li>
                </ul> : null}
            {att === 'referrerpolicy' ?
                <ul className={styles.list}>
                    <li>   <WordStyle font='bold'>Referrerpolicy</WordStyle>: Esse atributo especifica quais informações do referenciador enviar ao buscar um iframe.</li>
                    <li> <FiArrowRight /> Sintaxe : <WordStyle font='italic'>{meSignal}iframe referrerpolicy="no-referrer|no-referrer-when-downgrade|origin|origin-when-cross-origin|same-origin|strict-origin-when-cross-origin|unsafe-url"{maSignal}</WordStyle> </li>
                    <li><FiArrowRight /> Valores: </li>
                    <ul className={styles.farList}>
                        <li><GoArrowSmallRight /> No-referrer :
                            Nenhuma informação de referência será enviada junto com uma solicitação
                        </li>
                        <li><GoArrowSmallRight />
                            Origin :
                            Enviar apenas esquema, host e porta para o cliente de solicitação
                        </li>
                        <li><GoArrowSmallRight />
                            Origin-when-cross-origin: Para solicitações de origem cruzada: Enviar apenas esquema, host e porta. Para solicitações de mesma origem: inclua também o caminho.
                        </li>
                        <li><GoArrowSmallRight />
                            Same-origin:
                            Para solicitações de mesma origem: as informações do referenciador serão enviadas. Para solicitações de origem cruzada: nenhuma informação de referência será enviada
                        </li>
                        <li><GoArrowSmallRight />
                            Strict-origin: Envie informações do referenciador apenas se o nível de segurança for o mesmo (por exemplo, HTTPS para HTTPS). Não envie para um destino menos seguro (por exemplo, HTTPS para HTTP)
                        </li>
                        <li><GoArrowSmallRight />
                            Strict-origin-when-cross-origin: Envie o caminho completo ao realizar uma solicitação de mesma origem. Envie apenas a origem quando o nível de segurança permanecer o mesmo (por exemplo, HTTPS para HTTPS). Não envie cabeçalho para um destino menos seguro (HTTPS para HTTP).
                        </li>
                        <li><GoArrowSmallRight />
                            Unsafe-url: Envie origem, caminho e string de consulta (mas não fragmento, senha ou nome de usuário). Este valor é considerado inseguro.
                        </li>
                    </ul>
                </ul> : null}
            {att === 'rel' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Rel</WordStyle>: Atributo obrigatório especifica o relacionamento entre o documento atual e o documento/recurso vinculado.</li>
                    <li> <FiArrowRight /> Sintaxe : <WordStyle font='italic'>rel="value"</WordStyle> </li>
                    <li><FiArrowRight /> Valores: </li>
                    <ul className={styles.farList}>
                        <li><GoArrowSmallRight /> Alternate:
                            Fornece um link para uma versão alternativa do documento (ou seja, página impressa, traduzida ou espelhada).</li>
                        <li><GoArrowSmallRight />
                            Author: Fornece um link para o autor do documento.
                        </li>
                        <li><GoArrowSmallRight />
                            Help: Fornece um link para um documento de ajuda.
                        </li>
                        <li><GoArrowSmallRight />
                            Icon: Importa um ícone para representar o documento.
                        </li>
                        <li><GoArrowSmallRight />
                            Search: Fornece um link para um recurso que pode ser usado para pesquisar o documento atual e suas páginas relacionadas.
                        </li>
                        <li><GoArrowSmallRight />
                            Stylesheet: Importa uma folha de estilo.
                        </li>
                    </ul>
                </ul> : null}

            {att === 'title' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Title</WordStyle>: Define o título de um documento. Ele é mostrado na página de um navegador.</li>
                    <li> <FiArrowRight /> Sintaxe : <WordStyle font='italic'>{meSignal}title{maSignal} Título da página {meSignal}/title{maSignal}</WordStyle> </li>
                </ul> : null}
            {att === 'title' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Title</WordStyle>: Define o título de um documento. Ele é mostrado na página de um navegador.</li>
                    <li> <FiArrowRight /> Sintaxe : <WordStyle font='italic'>{meSignal}title{maSignal} Título da página {meSignal}/title{maSignal}</WordStyle> </li>
                </ul> : null}
            {att === 'description' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Description</WordStyle>:Description contém uma curta e precisa descrição do conteúdo da página, vários navegadores usam essa meta como descrição padrão da página quando é marcada.</li>
                    <li> <FiArrowRight /> Sintaxe : <WordStyle font='italic'>{meSignal}meta name= "description" content="descrição da página"{maSignal} </WordStyle> </li>
                </ul> : null}
            {att === 'charset' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Charset</WordStyle>: Este atributo define a codificação de caracteres usados na página. O conjunto de caracteres UTF-8 cobre quase todos os caracteres e símbolos do mundo.</li>
                    <li> <FiArrowRight /> Sintaxe : <WordStyle font='italic'>{meSignal}meta charset="UTF-8"{maSignal}</WordStyle> </li>
                </ul> : null}
            {att === 'keywords' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Keywords</WordStyle>: Keywords é uma meta de palavras-chaves associadas ao conteúdo da página, contendo stings separadas por vírgula.</li>
                    <li> <FiArrowRight /> Sintaxe : <WordStyle font='italic'>{meSignal}meta name="keywords" content="css, html, js"{maSignal}</WordStyle> </li>
                </ul> : null}
            {att === 'author' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Author</WordStyle>: Author define o nome do autor do documento.</li>
                    <li> <FiArrowRight /> Sintaxe : <WordStyle font='italic'>{meSignal}meta name="author" description="Filipe"{maSignal}</WordStyle> </li>
                </ul> : null}
            {att === 'download' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Download: </WordStyle>Leva o usuário a salvar a URL em vez de navegar até ela. Pode ser usado com ou sem um valor. Sem um valor, o browser irá sugerir um nome de arquivo/extensão, gerado a partir de diversas origens:</li>
                    <ul className={styles.farList}>
                        <li><GoArrowSmallRight /> O cabeçalho HTTP Content-Disposition</li>
                        <li><GoArrowSmallRight /> O segmento final no path (caminho) da URL</li>
                        <li><GoArrowSmallRight /> Tipo de mídia do cabeçalho (Content-Type, o início de um dado: URL ou Blob.type para um blob: URL)</li>
                        <li><GoArrowSmallRight /> A definição de um valor o sugere como o nome do arquivo. Caracteres / e \ são convertidos para underscores (_).Arquivos de sistema talvez proibam alguns caracteres em nomes de arquivos, então o navegador irá ajustar o nome sugerido caso necessário.</li>
                        <li><GoArrowSmallRight /> Download somente funciona para URLs de mesma origem , ou os esquemas blob: e data:</li>
                    </ul>
                </ul> : null}
            {att === 'shape' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Shape: </WordStyle> A forma do ponto de acesso associado. As especificações para colar 5 e HTML 4 definem os valores rect , que define uma região rectangular; círculo , o qual define uma região circular; poli , que define um polígono; e padrão , o que indica toda a região além de quaisquer formas definidas. Muitos navegadores, principalmente o Internet Explorer 4 e superior, apoio circ , polígono , e retângulo como valores válidos para forma ; estes valores são</li>
                </ul> : null}
            {att === 'type' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Type: </WordStyle> Este atributo especifica o tipo de mídia na forma de um tipo MIME para o destino do link. Geralmente, este é fornecido informações estritamente como consultivo; no entanto, no futuro, um navegador pode adicionar um pequeno ícone para os tipos de multimédia. Por exemplo, um navegador pode adicionar um pequeno ícone de alto-falante quando o tipo está definido para áudio / wav.</li>
                </ul> : null}
            {att === 'autoplay' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Autoplay: </WordStyle>Especifica que o áudio começará a ser reproduzido assim que estiver pronto</li>
                </ul> : null}
            {att === 'controls' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Controls: </WordStyle>Especifica que os controles de áudio devem ser exibidos (como um botão play/pause, etc.)</li>
                </ul> : null}
            {att === 'loop' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Loop: </WordStyle>Especifica que o áudio recomeçará sempre que terminar.</li>
                </ul> : null}
            {att === 'muted' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Muted: </WordStyle>Especifica que a saída de áudio deve ser silenciada.</li>
                </ul> : null}
            {att === 'preload' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Preload: </WordStyle>Especifica se e como o autor acha que o áudio deve ser carregado quando a página for carregada. Pode ter os valores: auto, metadata ou none.</li>
                </ul> : null}
            {att === 'src' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Src: </WordStyle> Especifica o caminho para o arquivo.</li>
                </ul> : null}
            {att === 'ismap' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Ismap: </WordStyle> Especifica uma imagem como um mapa de imagem do lado do servidor.</li>
                </ul> : null}
            {att === 'loading' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Loading: </WordStyle> Especifica se um navegador deve carregar uma imagem imediatamente ou adiar o carregamento de imagens até que algumas condições sejam atendidas.</li>
                    <li><FiArrowRight /> Os valores desse atributo são:</li>
                    <ul className={styles.farList}>
                        <li><GoArrowSmallRight /> eager</li>
                        <li><GoArrowSmallRight /> lazy</li>
                    </ul>
                </ul> : null}
            {att === 'usemap' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Usemap: </WordStyle> Especifica uma imagem como um mapa de imagem do lado do cliente.</li>
                </ul> : null}
            {att === 'srcset' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Srcset: </WordStyle>  Especifica uma lista de arquivos de imagem a serem usados​​em diferentes situações.</li>
                </ul> : null}
            {att === 'name' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Name: </WordStyle>  Especifica o nome do elemento.</li>
                </ul> : null}
            {att === 'default' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Default: </WordStyle> Especifica que a faixa deve ser habilitada se as preferências do usuário não indicarem que outra faixa seria mais apropriada.</li>
                </ul> : null}
            {att === 'kind' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Kind: </WordStyle> Especifica o tipo de faixa de texto.</li>
                    <ul className={styles.farList}>
                        <li><GoArrowSmallRight /> Captions: A faixa define a tradução de diálogos e efeitos sonoros (adequado para usuários surdos)</li>
                        <li><GoArrowSmallRight /> Chapters: A faixa define os títulos dos capítulos (adequados para navegar no recurso de mídia)</li>
                        <li><GoArrowSmallRight /> Descriptions:A faixa define uma descrição textual do conteúdo do vídeo (adequado para usuários cegos)</li>
                        <li><GoArrowSmallRight /> Metadata: A faixa define o conteúdo usado pelos scripts. Não visível para o usuário.</li>
                        <li><GoArrowSmallRight /> Subtitles: A faixa define legendas, usadas para exibir legendas em um vídeo</li>
                    </ul>
                </ul> : null}
            {att === 'srclang' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Srclang: </WordStyle> Especifica o idioma dos dados de texto da faixa (obrigatório se kind="subtitles").</li>
                </ul> : null}
            {att === 'poster' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Poster: </WordStyle> Especifica uma imagem a ser exibida durante o download do vídeo ou até que o usuário pressione o botão de reprodução.</li>
                </ul> : null}
            {att === 'allow' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Allow: </WordStyle> Especifica uma política de recursos para o elemento.</li>
                </ul> : null}
            {att === 'allowfullscreen' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Allowfullscreen: </WordStyle> Defina como true se o elemento puder ativar o modo de tela cheia chamando o método requestFullscreen()</li>
                </ul> : null}
            {att === 'allowpaymentrequest' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Allowpaymentrequest: </WordStyle> Defina como verdadeiro se um elemento de origem cruzada tiver permissão para invocar a API de solicitação de pagamento</li>
                </ul> : null}
            {att === 'sandbox' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Sandbox: </WordStyle> Habilita um conjunto extra de restrições para o conteúdo em um elemento.</li>
                    <li><FiArrowRight /> Os valores desse atributo são: </li>
                    <ul className={styles.farList}>
                        <li><GoArrowSmallRight /> allow-forms</li>
                        <li><GoArrowSmallRight /> allow-pointer-lock</li>
                        <li><GoArrowSmallRight /> allow-popups</li>
                        <li><GoArrowSmallRight /> allow-same-origin</li>
                        <li><GoArrowSmallRight /> allow-scripts</li>
                        <li><GoArrowSmallRight /> allow-top-navigation</li>
                    </ul>
                </ul> : null}
            {att === 'sizes' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Sizes: </WordStyle> Necessário quando source é usado em picture. Especifica a URL da imagem a ser usada em diferentes situações</li>
                </ul> : null}
            {att === 'async' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Async: </WordStyle> Um atributo booleano indicando que o navegador deve, se possível, executar o script assíncronamente.</li>
                    <li>Scripts inseridos dinamicamente (usando document.createElement) são executados assincronamente por padrão, então para torná-lo uma execução síncrona (ex. executar scripts na ordem que eles foram carregados) atribua async=false.</li>
                </ul> : null}
            {att === 'defer' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Defer: </WordStyle> sse atributo Boleano é usado para indicar ao navegador que o script deve ser executado depois que o documento tenha sido parseado, mas antes de disparar o evento DOMContentLoaded Scripts com o atributo defer vão impedir que o evento DOMContentLoaded seja disparado até que o script seja carregado e tenha terminado de ser avaliado.</li>
                    <li>Para conseguir um efeito similar para scripts inseridos dinamicamente use async=false. Scripts com o atributo defer vão ser executados na ordem em que aparecem no document.</li>
                </ul> : null}
            {att === 'integrity' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Integrity: </WordStyle> Contém metadados embutidos que um agente de usuário pode usar para verificar se um recurso buscado foi entregue sem manipulação inesperada.</li>
                </ul> : null}
            {att === 'nomodule' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Nomodule: </WordStyle> Esse atributo booleano é definido para indicar que o script não deve ser executado em navegadores que suportam módulos ES6 — na verdade, isso pode ser usado para servir scripts de fallback para navegadores mais antigos que não suportam código JavaScript module.</li>
                </ul> : null}
            {att === 'text' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Text: </WordStyle> Assim como o atributo textContent, esse atributo define o conteúdo de texto do elemento. Ao contrário do atributo textContent, no entanto, esse atributo é avaliado como código executável depois que o nó é inserido no DOM.</li>
                </ul> : null}
            {att === 'type=' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Type: </WordStyle>Indica o tipo de script representado. O valor deste atributo estará em uma das seguintes categorias:</li>
                    <ul className={styles.farList}>
                        <li><GoArrowSmallRight />Omitted or a JavaScript MIME type: Para navegadores compatíveis com HTML5, isso indica que o script é JavaScript. A especificação HTML5 insta os autores a omitir o atributo em vez de fornecer um tipo MIME redundante. Em navegadores anteriores, isso identificava a linguagem de script do código incorporado ou importado (através do atributo src)</li>
                        <li><GoArrowSmallRight />  Module: Para navegadores compatíveis com HTML5, o código é tratado como um módulo JavaScript. O processamento do conteúdo do script não é afetado pelos atributos charset e defer.</li>
                        <Image src={module} alt='exemplo de type module' />
                    </ul>
                </ul> : null}
            {att === 'abbr' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Abbr: </WordStyle> Especifica uma versão abreviada do conteúdo em uma célula de cabeçalho.</li>
                </ul> : null}
            {att === 'colspan' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Colspan: </WordStyle> Especifica o número de colunas que uma célula de cabeçalho deve abranger.</li>
                </ul> : null}
            {att === 'headers' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Headers: </WordStyle> Especifica uma ou mais células de cabeçalho às quais uma célula está relacionada.</li>
                </ul> : null}
            {att === 'rowspan' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Rowspan: </WordStyle> Especifica o número de linhas que uma célula de cabeçalho deve abranger.</li>
                </ul> : null}
            {att === 'scope' ?
                <ul className={styles.list}>
                    <li><WordStyle font='bold'>Scope: </WordStyle> Especifica se uma célula de cabeçalho é um cabeçalho para uma coluna, linha ou grupo de colunas ou linhas.</li>
                </ul> : null}
        </div>
    )
}

export default AttributesHtml