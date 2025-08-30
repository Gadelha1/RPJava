import React from "react";
import { InfoContainer, Nome, Linha } from "./portrait/PortraitStyle";

function CharacterInfo({ name, racaSelecionada, classeSelecionada, genero, idade }) {
   return (
    <InfoContainer>
        <Nome>{name}</Nome>
      <Linha>
        {genero && <span>{genero}</span>}
        {idade && <span>{idade}</span>}
      </Linha>
      <Linha>
        {racaSelecionada && <span>{racaSelecionada.nome}</span>}
        {classeSelecionada && <span>{classeSelecionada.nome}</span>}
      </Linha>
    </InfoContainer>
    ); 
}

export default CharacterInfo;