import Carrinho from './Carrinho'
import Frutas from './Frutas'

import React from "react";

import styled from 'styled-components'

const Corpo = styled.main`
  display: grid;
  grid-auto-flow: column;
  overflow: hidden;
`

const Container = styled.div`
  margin: 0 40px;
`

function Home({ frutas, carrinho, onCarrinhoChange, isNoCarrinho, setIsNoCarrinho }) {
  return (
    <Corpo>
      <Carrinho isNoCarrinho={isNoCarrinho} carrinho={carrinho} onCarrinhoChange={onCarrinhoChange} />
      
      <Container>
        <h1>Produtos</h1>
        <Frutas frutas={frutas} carrinho={carrinho} onCarrinhoChange={onCarrinhoChange} />
      </Container>
    </Corpo>
      
  );
}

export default Home