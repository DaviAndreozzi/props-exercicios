import React from "react"
import Carro from "./Carros";

export default function Garagem(props) {
  return (
    <div>
      <h1>Garagem de {props.nome} </h1>
      <main>
      <Carro nome={"kie"} cor={"azul"}/>
      <Carro nome={"dark"} cor={"cinza"}/>
      <Carro nome={"luz"} cor={"preto"}/>
      <Carro nome={"space"} cor={"branco"}/>
      </main>
    </div>
  );
}

