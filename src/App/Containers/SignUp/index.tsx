import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Wrapper,
  ArrowBackWrapper,
  HeaderWrapper,
  InputWrapper,
  ButtonWrapper,
} from './styles'

import api from '../../Services/api';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import backIcon from '../../Images/back.svg';

function SignUp() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Wrapper
        onSubmit={(e) => {
          e.preventDefault();
          api.post('users', {
            name,
            email,
            password,
          }).then(() => {
            alert('Cadastro realizado com sucesso!')
            history.push('/');
          }).catch(() => {
            alert('Email já cadastrado!')
          })
        }}
      >
        <ArrowBackWrapper>
          <Link to="/">
            <img src={backIcon} alt="Voltar" />
          </Link>
        </ArrowBackWrapper>

        <HeaderWrapper>
          <h1>Olá, informe seus dados</h1>
        </HeaderWrapper>

        <InputWrapper>
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            fullWidth
          />
        </InputWrapper>

        <InputWrapper>
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
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
            required
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
            Cadastrar
          </Button>
        </ButtonWrapper>

      </Wrapper>
    </Container>
  );
}

export default SignUp;