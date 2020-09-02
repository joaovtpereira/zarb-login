import React from 'react';

import {
  Container,
  CardWrapper,
  CardItem,
} from './styles';

import PageHeader from '../../Components/PageHeader';
import CardProduct from '../../Components/CardProduct';

function Dashboard() {
  return (
    <Container>
      <PageHeader title="Estes são os produtos disponíveis" />
      <CardWrapper>
        <CardItem>
          <CardProduct />
        </CardItem>

        <CardItem>
          <CardProduct />
        </CardItem>

        <CardItem>
          <CardProduct />
        </CardItem>

        <CardItem>
          <CardProduct />
        </CardItem>

        <CardItem>
          <CardProduct />
        </CardItem>

        <CardItem>
          <CardProduct />
        </CardItem>

        <CardItem>
          <CardProduct />
        </CardItem>

        <CardItem>
          <CardProduct />
        </CardItem>

        <CardItem>
          <CardProduct />
        </CardItem>
      </CardWrapper>
    </Container>
  );
}

export default Dashboard;