import React from 'react';

import { Container, ContentLeft, ContentMain } from './styles';

function Layout() {
  return (
    <Container>
      <ContentLeft>
        <h3>Mensagem</h3>
      </ContentLeft>
      <ContentMain>
        <h3>Content</h3>
      </ContentMain>
    </Container>
  );
}

export default Layout;
