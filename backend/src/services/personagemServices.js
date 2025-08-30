import { classes } from "../models/classes.js";
import { racas } from "../models/racas.js";

const criarPersonagem = (nome, idade, genero, raca, classe, distribuicao) => {
    
    const racaSelecionada = racas.find(r => r.nome === raca);
    if (!racaSelecionada) {
        throw new Error("Raça inválida");
    }

    const classeSelecionada = classes.find(c => c.nome === classe);
    if (!classeSelecionada) {
        throw new Error("Classe inválida");
    }

    const atributosBase = 5;

    const atributos = { 
        forca: atributosBase + distribuicao.forca + (racaSelecionada.bonus.forca || 0),
        destreza: atributosBase + distribuicao.destreza + (racaSelecionada.bonus.destreza || 0),
        inteligencia: atributosBase + distribuicao.inteligencia + (racaSelecionada.bonus.inteligencia || 0),
        carisma: atributosBase + distribuicao.carisma + (racaSelecionada.bonus.carisma || 0),
        constituicao: atributosBase + distribuicao.constituicao + (racaSelecionada.bonus.constituicao || 0)
    }

    const personagem = {
        nome: nome,
        raca: racaSelecionada,
        classe: classeSelecionada,
        idade: idade,
        genero: genero,
        atributos: {...atributos},
        descricaoRaca: racaSelecionada.descricao,
    };

    return personagem;
}

const distribuicao = {
    forca: 2,
    destreza:3,
    inteligencia: 7,
    carisma: 3,
    constituicao: 3
}

const novoPersonagem = criarPersonagem("Hata", 24, "Masculino", "Elfo", "Mago", distribuicao);
console.log(novoPersonagem);

