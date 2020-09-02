import React from 'react';

import {
  Container,
  CardWrapper,
  CardItem,
} from './styles';

import PageHeader from '../../Components/PageHeader';
import CardProduct from '../../Components/CardProduct';

import productsJson from '../../Util/products.json';

function Dashboard() {
  return (
    <Container>
      <PageHeader title="Estes são os produtos disponíveis" />
      <CardWrapper>
        {
          productsJson.products.map((product) => {
            return (
              <CardItem key={product.id}>
                <CardProduct 
                  title={product.name}
                  description={product.description}
                  image={product.image}
                />
              </CardItem>
            );
          })
        }
      </CardWrapper>
    </Container>
  );
}

export default Dashboard;