import React, { useEffect, useState } from "react";

import styled from 'styled-components'

const CardCarrinhodiv = styled.div `
  width: 100%;
  height: 80px;
  background: #d8d8d8;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
  grid-template-columns: 80px auto 80px;
  margin-bottom: 8px;
  overflow: hidden;

  &:hover {
    background: #ccc;
  }

  img {
    background: #404040;
    width: 80px;
    height: auto;
  }

  .ids-card-carrinho {
    display: grid;
    align-items: center; 
    justify-content: left;
    grid-gap: 6px;
  }

  h4, p {
    margin: 0;
    padding: 0;
  }
  h4 {
    align-self: end;
  }
  p {
    align-self: baseline;
  }

  .botoes-card-carrinho {
    padding: 6px;
    display: grid;
    grid-gap: 6px;
    grid-template-areas: 
      "a b"
      "c c"; 
  }

  button {
    border: none;
    padding: 6px;
  }
  button:hover {
    background: #fcc200;
  }
  #sub { grid-area: a; }
  #add { grid-area: b; }
  #rmv { grid-area: c; }
`

function spliceNoMutate(myArray, indexToRemove) {
    return myArray.slice(0, indexToRemove).concat(myArray.slice(indexToRemove + 1));
}

function ConfereArray(arr, ele) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === ele.nome) {
            return spliceNoMutate(arr, i)
        }
    }
    return arr
}

function CardCarrinho({ fruta, carrinho, onCarrinhoChange, total, onTotalChange }) {
    const [qnt, setQnt] = useState(1)

    useEffect(() => {
        onTotalChange(total + (fruta.preco * qnt));
    }, [onTotalChange])

    return ( <
        CardCarrinhodiv >
        <
        img src = { `/img/${fruta.imagem}` }
        alt = { "imagem da " + fruta.nome }
        /> <
        div className = "ids-card-carrinho" >
        <
        h4 > { fruta.nome } - { qnt } { fruta.quantidade } < /h4> <
        p > R$ {
            (fruta.preco * qnt).toFixed(2)
        } < /p> < /
        div >

        <
        div className = "botoes-card-carrinho" >
        <
        button id = "sub"
        onClick = {
            () => {
                if (qnt > 1) {
                    setQnt(qnt - 1)
                    onTotalChange(total - fruta.preco)
                }
            }
        } > - < /button> <
        button id = "add"
        onClick = {
            () => {
                setQnt(qnt + 1)
                onTotalChange(total + fruta.preco)
            }
        } > + < /button>

        <
        button id = "rmv"
        onClick = {
            () => {
                onTotalChange(total - (fruta.preco * qnt))
                onCarrinhoChange(ConfereArray(carrinho, fruta))
            }
        } > remover < /button> < /
        div >

        <
        /CardCarrinhodiv>
    );
}

export default CardCarrinho