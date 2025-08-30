const Guerreiro = {
  nome: "Guerreiro",
  bonus: {
    forca: 2
  },
  requisito: {
    constituicao: 10,
  },
};

const Mago = {
  nome: "Mago",
  bonus: {
    inteligencia: 2,
  },
  requisito: {
    inteligencia: 12,
  },
};

const Ladino = {
  nome: "Ladino",

  bonus: {
    destreza: 2,
  },
  requisito: {
    destreza: 10,
  },
};
const Clerigo = {
  nome: "Clérigo",
  bonus: {
    carisma: 2,
  },
  requisito: {
    carisma: 10,
  },
};

export const classes = 
[
    Guerreiro, Mago, Ladino, Clerigo
];
