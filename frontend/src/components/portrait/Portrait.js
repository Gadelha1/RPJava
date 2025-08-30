import React from "react";
import { Card } from "antd";
import CharacterInfo from "../CharacterInfo";


function Portrait({ name, racaSelecionada, classeSelecionada, genero, idade }) {
  return (  
<Card
    style={{ width: 300, margin: "0 auto" }}
    cover={
        name
        ? (
      <img
        alt="Portrait"
        src="https://placehold.co/300"
        style={{ width: "100%", height: 300 }}
      />
        ) : null
    }
    >
        <div className="portrait-divider" />
    <CharacterInfo
      name={name}
      racaSelecionada={racaSelecionada}
      classeSelecionada={classeSelecionada}
      genero={genero}
      idade={idade}
    />
</Card>
  );
}

export default Portrait;