import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  align-content: center;  
`;

export const ArrowBackWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 16px;  
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 12px;
`;

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center; 
`;

export const InputWrapper = styled.div`
  & + & { 
    margin-top: 8px;
  }
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 8px;
`;