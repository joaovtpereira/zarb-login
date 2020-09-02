import React from 'react';

import { useHistory } from 'react-router-dom';

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
  const history = useHistory();

  return (
    <Container>
      <Header>
        <ButtonLink 
          to="/" 
          onClick={() => {
            localStorage.removeItem('app-token')
            history.push('/')
          }}
        >
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