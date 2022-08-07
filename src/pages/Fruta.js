import api from "../services/api";

import React, { useEffect, useState } from "react";

import styled from 'styled-components'

const CardNutricaoDiv = styled.div`
  background: #fff;
  position: absolute;
  margin-top: -5px;
  margin-left: 25px;
  padding: 12px;
  z-index: 5;

  h4 {
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style-type: none;
    font-size: .9em;
  }
`

export default function Fruta({ fruta, isHovering }) {
  const [info, setInfo] = useState();

  useEffect(() => {
    api
      .get(`/api/fruit/${fruta.name}`)
      .then((response) => setInfo(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro: " + err);
      });
  }, []);

  return (
    <CardNutricaoDiv style={{display: isHovering ? 'block' : 'none' }} >
      <h4>Informações Nutricionais</h4>
      {
        (info !== undefined) ?
        <ul>
          <li>Carboidratos: {info.nutritions.carbohydrates}</li>
          <li>Proteínas: {info.nutritions.protein}</li>
          <li>Gorduras: {info.nutritions.fat}</li>
          <li>Calorias: {info.nutritions.calories}</li>
          <li>Açúcares: {info.nutritions.sugar}</li>
        </ul> :
        <p>Buscando informações...</p>
      }
      
    </CardNutricaoDiv>
  );
}