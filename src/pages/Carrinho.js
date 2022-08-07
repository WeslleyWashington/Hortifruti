import React, { useEffect, useState } from "react";

import styled from 'styled-components'
import CardCarrinho from "../components/CardCarrinho";

const Aba = styled.div`
  margin: 0;
  padding: 0;
  width: 320px;
  background-color: #f1f1f1;

  h2 {
    padding: 0 16px;
  }

  @media(max-width: 700px) {

  }
`

const CarrinhoVazio = styled.div`
  width: 100%;
  height: 80px;
  background: #d8d8d8;
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  p {
    padding-left: 8px;
  }
`

const TotalCard = styled.div`
  padding: 8px;

  h4 {
    margin: 12px 0 6px 0;
    padding: 0;
  }
  button {
    padding: 8px 16px;
    border: none;
    font-size: 1em;
  }

  #finalizar {
    background: #00b400;
  }
  #finalizar:hover {
    background: #00cb00;
  }

  #limpar {
    background: #eb5000;
    float: right;
  }
  #limpar:hover {
    background: #eb0500;
  }

`


function Carrinho({ carrinho, onCarrinhoChange, isNoCarrinho }) {
  const [total, setTotal] = useState(0);

  return (
    <Aba style={{display: isNoCarrinho ? 'block' : 'none' }} >
      <h2>Carrinho</h2>
      {
      (carrinho.length > 0) ?
        carrinho.map(fruta => {
          return(
            <CardCarrinho key={fruta.nome} fruta={fruta} carrinho={carrinho} onCarrinhoChange={onCarrinhoChange} total={total} onTotalChange={setTotal} />
          );
        }) :
        <CarrinhoVazio>
          <p>Carrinho Vazio</p>
        </CarrinhoVazio>
      }

      <TotalCard>
        <h4>Total: R$ {(total).toFixed(2)}</h4>

        <button id="finalizar" onClick={() => {
          console.log( "me contrata" )
        }}>Finalizar compra</button>

        <button id="limpar" onClick={() => {
          onCarrinhoChange([])
          setTotal(0)
        }}>×</button>
      </TotalCard>

    </Aba>
  );
}

export default Carrinho