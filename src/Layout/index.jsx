/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect } from 'react';
import { gsap, TweenMax } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import backgroundImg from '../assets/background.png';
import Todo from '../Pages/Todo';

import { Container, ContentLeft, ContentMain } from './styles';

function Layout() {
  const timeline = gsap.timeline({ repeat: false, yoyo: false });

  useEffect(() => {
    TweenMax.to('div > aside > img', {
      opacity: 1,
      duration: 3,
    });

    gsap.registerPlugin(TextPlugin);
    gsap.defaults({ ease: 'none' });
    timeline.to('div > aside > h1', {
      duration: 5,
      text:
        'Organize suas tarefas do dia a dia utilizando o aplicativo Todo List Simples e fácil de utilizar.',
    });
  }, [timeline]);

  return (
    <Container>
      <ContentLeft>
        <img src={backgroundImg} alt="Imagem de fundo" />
        <h1 />
      </ContentLeft>
      <ContentMain>
        <Todo />
      </ContentMain>
    </Container>
  );
}

export default Layout;
