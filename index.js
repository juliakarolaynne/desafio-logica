
const nome_heroi = "Julia";
const xp = 15000;

let nivel = "";

switch (true) {
    case xp < 1000:
        nivel = "Ferro";
        break;
    case xp >= 1000 && xp <= 2000:
        nivel = "Bronze";
        break;
    case xp >= 2001 && xp <= 5000:
        nivel = "Prata";
        break;
    case xp >= 5001 && xp <= 7000:
        nivel = "Ouro";
        break;
    case xp >= 7001 && xp <= 8000:
        nivel = "Platina Diamante";
        break;
    case xp >= 8001 && xp <= 9000:
        nivel = "Ascendente";
        break;
    case xp >= 9001 && xp <= 10000:
        nivel = "Imortal";
        break;
    default:
        nivel = "Radiante";
}

console.log(`O Herói de nome ${nome_heroi} está no nível de ${nivel}`);