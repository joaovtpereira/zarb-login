import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Wrapper,
  HeaderWrapper,
  InputWrapper,
  ButtonWrapper,
} from './styles'

import api from '../../Services/api';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function ForgotPassword() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Wrapper
        onSubmit={(e) => {
          e.preventDefault();
          api.put('users', {
            email,
            password,
          }).then(() => {
            alert('Mudança realizada com sucesso!')
            history.push('/');
          }).catch(() => {
            alert('Erro na mudança de senha!')
          })
        }}
      >
        <HeaderWrapper>
          <h1>Olá, Informe os dados</h1>
        </HeaderWrapper>

        <InputWrapper>
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </InputWrapper>

        <InputWrapper>
          <TextField
            id="outlined-basic"
            label="Nova senha"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Recuperar senha
          </Button>
        </ButtonWrapper>

      </Wrapper>
    </Container>
  );
}

export default ForgotPassword;