const Humano = {
    nome: 'Humano',
    bonus: {
        forca: 1,
        destreza: 1,
        inteligencia: 1,
        carisma: 1,
        constituicao: 1
    },
    descricao: 'Os humanos são conhecidos por sua adaptabilidade e versatilidade. Eles podem se destacar em qualquer classe, pois possuem um bônus equilibrado em todas as habilidades.',
}

const Elfo = {
    nome: 'Elfo',
    bonus: {
        destreza: 2,
        inteligencia: 1
    },
    descricao: 'Os elfos são conhecidos por sua agilidade e habilidades mágicas. Eles são excelentes arqueiros e magos, com uma conexão especial com a natureza.',
}

const Anão = {
    nome: 'Anão',
    bonus: {
        forca: 1,
        constituicao: 2
    },
    descricao: 'Os anões são conhecidos por sua resistência e força. Eles são excelentes guerreiros e artesãos, com uma afinidade especial por pedras e metais.',
}

const Orc = {
    nome: 'Orc',
    bonus: {
        forca: 2,
        inteligencia: -1
    },
    descricao: 'Os orcs são conhecidos por sua força bruta e ferocidade. Eles são guerreiros temíveis, mas também podem ser astutos e inteligentes.',
}

export const racas = [
    Humano,
    Elfo,
    Anão,
    Orc
];