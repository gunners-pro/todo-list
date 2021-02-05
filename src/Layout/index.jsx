import React from 'react';
import backgroundImg from '../assets/background.png';

import { Container, ContentLeft, ContentMain } from './styles';

function Layout() {
  return (
    <Container>
      <ContentLeft>
        <img src={backgroundImg} alt="Imagem de fundo" />
        <h1>
          Organize suas tarefas do dia a dia utilizando o aplicativo Todo List.
          Simples e fácil de utilizar.
        </h1>
      </ContentLeft>
      <ContentMain>
        <h3>Content</h3>
      </ContentMain>
    </Container>
  );
}

export default Layout;
