import React from 'react';

import {
  Container,
  Header,
  Content,
  ButtonLink,
} from './styles'

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, description}) => {
  return (
    <Container>
      <Header>
        <ButtonLink to="/">
          Sair
        </ButtonLink>
      </Header>

      <Content>
        <strong>{title}</strong>
        { description && <p>{description}</p>}
      </Content>
    </Container>
  );
}

export default PageHeader;