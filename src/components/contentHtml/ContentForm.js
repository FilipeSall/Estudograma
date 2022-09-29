import React from 'react';
import Code from '../textFormat/Code';
import Title from '../textFormat/Title';
import styles from './Content.module.css';
import { GoArrowSmallRight } from "react-icons/go";
import { FcAdvertising } from "react-icons/fc";
import MiniTitle from '../textFormat/MiniTitle';
import AttributesHtml from '../attributes/AttributesHtml';

const ContentForm = () => {
  return (
    <section className={`${styles.content} + animationFromTop`}>
      <p>Html provê vários elementos que podem ser usados junttos para criar formulárrios que o usuário pode preencher e mandar para o site ou aplicativo.</p>
      <Title title='Form' id='form' />
      <p>A tag <Code text='form' /> é usada para criar um formulário HTML para a entrada do usuário.</p>
      <p>O elemento  <Code text='form' /> pode conter um ou mais dos seguintes elementos de formulário:</p>
      <p><GoArrowSmallRight />input</p>
      <p><GoArrowSmallRight />textarea</p>
      <p><GoArrowSmallRight />button</p>
      <p><GoArrowSmallRight />select</p>
      <p><GoArrowSmallRight />option</p>
      <p><GoArrowSmallRight />outgroup</p>
      <p><GoArrowSmallRight />fieldset</p>
      <p><GoArrowSmallRight />label</p>
      <p><GoArrowSmallRight />output</p>
      <p>É possível utilizar as pseudo-classes de css :invalid e valid em um elemento form para interagir melhor com o usuário.</p>
      <MiniTitle icon={<FcAdvertising />} title='Atributos da tag Form' />
      <AttributesHtml att='accept-charset' />
      <AttributesHtml att='action' />
      <AttributesHtml att='autocomplete' />
      <AttributesHtml att='enctype' />
      <AttributesHtml att='method' />
      <AttributesHtml att='name' />
    </section>
  )
}

export default ContentForm