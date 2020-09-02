import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-content: center;  
`;

export const CardWrapper = styled.ul`
  flex-grow: 3;
  display: grid;
  grid-template-columns: auto auto auto auto;
  list-style-type: none;
  margin-left: 5%;
  margin-top: 16px;

  @media(max-width: 1600px) {
    grid-template-columns: auto auto auto;
    align-self: center;
  }

  @media(max-width: 1180px) {
    grid-template-columns: auto auto;
  }

  @media(max-width: 800px) {
    grid-template-columns: auto;
  }

`;

export const CardItem = styled.li`
  display: inline;
  width: 350px;
  height:272px;
  margin: 12px;
`;