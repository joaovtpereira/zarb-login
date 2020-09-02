import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  align-content: center;  
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 12px;
`;

export const InputWrapper = styled.div`
  & + & { 
    margin-top: 8px;
  }
  width: 100%;
`;

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center; 
`;

export const ForgotPasswordWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 4px 0px 8px;
`;

export const ButtonLink = styled(Link)`
  color: #000066;
  cursor: pointer;
  text-decoration: none;
`;

export const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 4px;
`;


