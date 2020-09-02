import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* height: 100vh; */
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
`;

export const CardItem = styled.li`
  display: inline;
  margin: 12px;
`;