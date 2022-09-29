import React from 'react';
import Code from '../textFormat/Code';
import Title from '../textFormat/Title';
import styles from './Content.module.css';
import table from '../../common/assets/images/html/tabelas/table.png';
import caption from '../../common/assets/images/html/tabelas/caption.png';
import Image from '../textFormat/Image';
import colgroup from '../../common/assets/images/html/tabelas/colgroup.png' ;
import tfoot from '../../common/assets/images/html/tabelas/tfoot.png' ;
import thead from '../../common/assets/images/html/tabelas/thead.png';
import MiniTitle from '../textFormat/MiniTitle';
import { FcAdvertising } from "react-icons/fc";
import { ImForward } from "react-icons/im";
import AttributesHtml from '../attributes/AttributesHtml';

const ContentTable = () => {
    return (
        <section className={`${styles.content} + animationFromTop`}>
            <p>Estes elementos são usados ​​para criar e manipular dados em tabelas.</p>
            <Title id='table' title='Table' />
            <p>A <Code text='table' /> tag define uma tabela HTML.</p>
            <p>Uma tabela HTML consiste em um <Code text='table' /> elemento e um ou mais elementos <Code text='tr' /> , <Code text='th' /> e <Code text='td' />.</p>
            <p>O elemento <Code text='tr' /> define uma linha de tabela, o elemento <Code text='th' /> define um cabeçalho de tabela e o elemento <Code text='td' /> define uma célula de tabela.</p>
            <p>Uma tabela HTML também pode incluir elementos <Code text='caption' /> , <Code text='colgroup' /> , <Code text='thead' /> , <Code text='tfoot' /> e <Code text='tfoot' />.</p>
            <Image src={table} alt='exemplo de uma tabela no HTML' />
            <Title title='Caption' id='caption' />
            <p>A <Code text='caption' /> tag define uma legenda de tabela.</p>
            <p>A <Code text='caption' /> tag deve ser inserida imediatamente após a tag <Code text='table' />.</p>
            <p>Por padrão, uma legenda de tabela será alinhada ao centro acima de uma tabela. No entanto, as propriedades CSS text-align e caption-side podem ser usadas para alinhar e colocar a legenda.</p>
            <Image src={caption} alt='exemplo de caption' />
            <Title title='Colgroup' id='colgroup' />
            <p>A <Code text='colgroup'/> tag especifica um grupo de uma ou mais colunas em uma tabela para formatação.</p>
            <p>A <Code text='colgroup'/> tag é útil para aplicar estilos a colunas inteiras, em vez de repetir os estilos para cada célula, para cada linha.</p>
            <p>A <Code text='colgroup'/> tag deve ser filha de um elemento <Code text='table'/>, após qualquer elemento <Code text='caption'/> e antes de qualquer elemento thead, tbody, tfoot e tr.</p>
            <p>Para definir diferentes propriedades para uma coluna dentro de um <Code text='colgroup'/> , use a tag <Code text='col'/> dentro da <Code text='colgroup'/>.</p>
            <Image  src={colgroup} alt='exemplo de colgroup' />
            <Title title='Thead' id='thead' />
            <p>A <Code text='thead' /> tag é usada para agrupar o conteúdo do cabeçalho em uma tabela HTML.</p>
            <p>O <Code text='thead' /> é usado em conjunto com os elementos <Code text='tbody' /> e <Code text='tfoot' /> para especificar cada parte de uma tabela (cabeçalho, corpo, rodapé).</p>
            <p>Os navegadores podem usar esses elementos para permitir a rolagem do corpo da tabela independentemente do cabeçalho e do rodapé. Além disso, ao imprimir uma tabela grande que abrange várias páginas, esses elementos podem permitir que o cabeçalho e o rodapé da tabela sejam impressos na parte superior e inferior de cada página.</p>
            <p>O  <Code text='thead' /> elemento deve ter uma ou mais tags  <Code text='tr' /> dentro.</p>
            <p>A <Code text='thead' /> tag deve ser usada no seguinte contexto: Como filho de um elemento <Code text='table' /> , após qualquer elemento <Code text='caption' /> e <Code text='colgroup' /> e antes de qualquer elemento <Code text='tbody' /> , <Code text='tfoot' /> e <Code text='tr' /> .</p>
            <p>Os <Code text='thead' /> , <Code text='tbody' /> e <Code text='tfoot' /> não afetarão o layout da tabela por padrão.</p>
            <Image src={thead} alt='exemplo thead' />
            <Title  title='Th'  id='Th'/> 
            <p>O elemento <Code text='th' /> define uma célula cabeçalho do grupo de células de sua tabela. A exatidão natural deste grupo é definida pelos atributos scope e headers.</p>
            <p>O texto nos <Code text='th' /> está em negrito e centralizado por padrão.</p>
            <MiniTitle icon={<FcAdvertising />} title='Atributos da tag Th' />
            <AttributesHtml att='abbr' />
            <AttributesHtml att='colspan' />
            <AttributesHtml att='headers' />
            <AttributesHtml att='rowspan' />
            <AttributesHtml att='scope' />
            <Title  title='Tbody' id='tbody' />
            <p>A tag <Code text='tbody'/> é usada para agrupar o conteúdo do corpo de uma tabela HTML.</p>
            <p>O <Code text='tbody'/> é usado em conjunto com os elementos <Code text='thead'/> e <Code text='tfooy'/> para especificar cada parte de uma tabela (corpo, cabeçalho, rodapé).</p>
            <p>Os navegadores podem usar esses elementos para permitir a rolagem do corpo da tabela independetemente do cabeçalho e do rodapé. Além disso, ao imprimir uma tabela que abrange várias páginas, esses elementos podem permitir que o cabecalho e o rodapé da tabeça sejam impressos na parte superior e inferior de cada página.</p>
            <p>O <Code text='tbody'/> deve ter uma ou mais tags <Code text='tr'/> ou <Code text='th'/></p>
            <p>O elemento <Code text='tbody'/>deve ser usada no seguinte contexto: Como filho de um elemento <Code text='table'/>, após qualquer elemento <Code text='caption'/>, <Code text='colgroup'/> e<Code text='thead'/></p>
            <Title title='Tr' id='tr' />
            <p>A tag <Code text='tr'/> define uma linha de celulas em uma tabela. Um <Code text='tr'/> contém um ou mais elementos <Code text='th'/> ou <Code text='td'/></p>
            <p>Para fornecer controle adicional sobree como as células se encaixam (ou se estendem) nas colunas, ambos <Code text='th'/> e <Code text='td'/> suportam o colspan, que permite especificar quantas colunas de largura a célula devve ter, sendo o padrão 1. Da mesma forma, você pode usar o rowspace em células para indicar qee eles devem abranger mais de uma linha da tabela.</p>
            <Title  title='Td' id='td' />
            <p>A tag <Code text='td'/> define uma célula de dados padrão em uma tabela HTML.</p>
            <p>Uma tabela HTML tem dois tipos de células:</p>
            <p><ImForward /> Células de cabeçalho - contém informações de cabeçalho (criadas com o elemento Células de cabeçalho - contém informações de cabeçalho criadas com o elemento <Code text='th'/>).</p>
            <p><ImForward /> Células de dados - contém dados (criados com o elemento <Code text='td'/>)</p>
            <p>O texto nos <Code text='td'/> é regular e alihado à esquerda por padrao.</p>
            <p>O teto nos elementos <Code text='th'/> está em negrito e centralizado por padrão.</p>
            <Title  title='Tfoot' id='tfoot' />
            <p>A tag <Code text='tfoot'/> é usada em conjunto com os elementos thead e tbody para especificar cada parte de uma tabela (rodapé, cabeçalho, corpo).</p>
            <p>A tag <Code text='tfoot'/> deve conter uma ou mais tags <Code text='tr'/> dentro.</p>
            <p>A tag <Code text='tfoot'/> deve ser usada no seguinte contexto: Como filho de table, após qualquer elemento caption, colgroup, thead e tbody.</p>
            <p>Os elementos thead, tbody e tfoot não afetarão o layout da tabela por padrão.</p>
            <Image src={tfoot} alt='exemplo de tfoot' />
        </section>
    )
}

export default ContentTable