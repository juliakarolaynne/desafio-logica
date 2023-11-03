class personagem {
  constructor(nome, idade, tipo, ataque) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = ataque;
  }

  mensagem() {
    console.log(`${this.nome} o ${this.tipo} atacou usando ${this.ataque}`)
  }
}

const personagem1 = new personagem("Kakashi Hatake", 30, "Hokage", "Raikiri");
const personagem2 = new personagem("Sasuke Uchiha", 17, "Genin", "Chidori")
const personagem3 = new personagem("Naruto Uzumaki", 17, "Genin", "Rasengan")
const personagem4 = new personagem("Shikamaru Nara", 17, "Jounin", "possessão das sombras")

personagem1.mensagem();
personagem2.mensagem();
personagem3.mensagem();
personagem4.mensagem();