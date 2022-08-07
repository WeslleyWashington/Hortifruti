import CardFruta from '../components/CardFruta'

import React from "react";
import { Outlet } from 'react-router-dom';

import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 15px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 740px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 520px) {
    grid-template-columns: auto;
  }
`

function Frutas({ frutas, carrinho, onCarrinhoChange }) {

  return (
    <Grid >
      {
        frutas.map(fruta => {
          return(
            <CardFruta fruta={fruta} carrinho={carrinho} onCarrinhoChange={onCarrinhoChange} key={fruta.name} />
          );
        })
      }
      <Outlet />
    </Grid>
  );
}

export default Frutas