import React, { useCallback, useState } from "react";

import styled from 'styled-components'

const NavBar = styled.header `
  margin: 0.5rem 1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .image-clickable {
    margin-right: auto;
  }
  .logo {
    height: 3.5rem;
    margin-right: auto;
  }

  .nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .nav-links li {
    display: inline-block;
    padding: 0 1.25rem;
  }
  .nav-links li button {
    font-size: 1rem;
    border:none;
    background: inherit;
  }
  .nav-links li button:hover {
    color: #eb5000;
  }

  #carrinho {
    font-size: 2em;
  }
  span {
    font-size: 1em;
  }
`

export default function Navbar({ carrinho, onCarrinhoChange, isNoCarrinho, setIsNoCarrinho }) {
    const handleIsNoCarrinhoChange = useCallback(() => {
        isNoCarrinho = !isNoCarrinho
        setIsNoCarrinho(isNoCarrinho)
    }, [setIsNoCarrinho])

    return ( <
        NavBar >
        <
        span className = "image-clickable" >
        <
        a href = "../" >
        <
        img src = "/img/frexco.png"
        alt = "main-logo"
        className = "logo" / >
        <
        /a> <
        /span> <
        nav >
        <
        ul className = "nav-links" >
        <
        li > < button id = "carrinho"
        onClick = { handleIsNoCarrinhoChange } > 🛒 < span > {
            (carrinho.length > 0) ? new Set(carrinho).size : "" } <
        /span></button > < /li> <
        /ul> <
        /nav> <
        /NavBar>
    );
}