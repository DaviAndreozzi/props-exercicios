import React from "react";

export default function Carros(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <ul>
        <li>Cor: {props.cor}</li>
        <li>Ano: 2018</li>
        <li>Flex: Não</li>
      </ul>
    </div>
  );
}

