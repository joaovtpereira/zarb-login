import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  HeaderWrapper,
  InputWrapper,
  Wrapper,
  ForgotPasswordWrapper,
  ButtonLink,
  SignUpWrapper,
} from './styles'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import api from '../../Services/api';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <Container>
      <Wrapper
        onSubmit={(e) => {
          e.preventDefault();
          api.post('session', {
            email,
            password,
          }).then((data) => {
            alert('login realizado com sucesso!')
            localStorage.setItem('app-token', data.data.user.name)
            history.push('/');
          }).catch(() => {
            alert('Email ou senha incorretos!')
          })
        }}
      >
        <HeaderWrapper>
          <h1>Olá, seja bem vindo!</h1>
        </HeaderWrapper>

        <InputWrapper>
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
        </InputWrapper>
        
        <InputWrapper>
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />
        </InputWrapper>

        <ForgotPasswordWrapper>
          <ButtonLink
            to="/forgot-password"
          >
            Esqueceu a senha?
          </ButtonLink>
        </ForgotPasswordWrapper>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          Entrar
        </Button>

        <SignUpWrapper>
          <ButtonLink
            to='/sign-up'
          >
            Não possui cadastro? se cadastre
          </ButtonLink>
        </SignUpWrapper>

      </Wrapper>
    </Container>
  );
}

export default Login;
