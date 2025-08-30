import React, { useEffect, useState } from "react";
import { Input, Select } from "antd";
import Portrait from "./portrait/Portrait";
import axios from "axios";


const { Option } = Select;

const generos = ["Masculino", "Feminino", "Não-binário"];

function CharacterForm(){
  const [name, setName] = useState([]);
  const [genero, setGenero] = useState([]);
  const [idade, setIdade] = useState([]);
  const [raca, setRaca] = useState([]);
  const [classe, setClasse] = useState([]);
  const [racas, setRacas] = useState([]);
  const [classes, setClasses] = useState([]);

useEffect(() => {
    axios.get("http://localhost:3001/racas").then(res => setRacas(res.data));
    axios.get("http://localhost:3001/classes").then(res => setClasses(res.data));
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRacaChange = (value) => {
    setRaca(value);
  };

    const handleClasseChange = (value) => { 
        setClasse(value);
    };

    const handleIdadeChange = (e) => setIdade(e.target.value);
  const handleGeneroChange = (value) => setGenero(value);

  const racaSelecionada = racas.find((r) => r.nome === raca);
  const classeSelecionada = classes.find((c) => c.nome === classe);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <label style={{ marginRight: 5 }}>Nome do Personagem </label>
      <Input
        value={name}
        onChange={handleNameChange}
        placeholder="Digite o nome do personagem"
        style={{ width: 300 }}
      />

      <label style={{ marginRight: 5 }}>Gênero</label>
      <Select
        value={genero}
        onChange={handleGeneroChange}
        placeholder="Selecione um gênero"
        style={{ width: 100 }}
      >
        {generos.map((g) => (
          <Option key={g} value={g}>
            {g}
          </Option>
        ))}
      </Select>

      <label style={{ marginRight: 5 }}>Idade</label>
      <Input
        value={idade}
        onChange={handleIdadeChange}
        placeholder="Digite a idade do personagem"
        style={{ width: 100 }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 5,
        }}
      >
        <label style={{ marginRight: 5 }}>Raça</label>
        <Select
          value={raca}
          onChange={handleRacaChange}
          placeholder="Selecione uma raça"
          style={{ width: 100 }}
          dropdownStyle={{ width: 100 }}
        >
          {racas.map((r) => (
            <Option key={r.id} value={r.nome}>
              {r.nome}
            </Option>
          ))}
        </Select>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 5,
        }}
      >
        <label style={{ marginRight: 5 }}>Classe</label>
        <Select
          value={classe}
          onChange={handleClasseChange}
          placeholder="Selecione uma classe"
          style={{ width: 100 }}
          dropdownStyle={{ width: 100 }}
        >
          {" "}
          {classes.map((c) => (
            <Option key={c.id} value={c.nome}>
              {c.nome}
            </Option>
          ))}
        </Select>
      </div>

      <div style={{ width: 500, marginTop: 20 }}>
        <Portrait
          name={name}
          racaSelecionada={racaSelecionada}
          classeSelecionada={classeSelecionada}
          genero={genero}
          idade={idade}
        />
      </div>
    </div>
  );
}

export default CharacterForm;