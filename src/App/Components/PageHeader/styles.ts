import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #8257E5;
  width: 100%;
`;

export const Header = styled.header`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #D4C2FF;
  padding: 1.6rem 0;
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  margin: 3.2rem auto;

  > strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: #FFFFFF;
  };

  > p {
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: #D4C2FF;
    margin-top: 2.4rem;
  }
`;

export const ButtonLink = styled(Link)`
  color: #FFFFFF;
  cursor: pointer;
  text-decoration: none;
`;