var prompt = require('prompt-sync')();

let life_boss = +prompt (`Digite a vida total do boss: `);
let valor_dmg = +prompt (`Digite seu dmg por turno: `);

if (life_boss >= 10 && life_boss <=50){
        console.log(`O boss tem ${life_boss}HP`);
    } else{
        console.log(`O boss precisa ter entre 10 e 50 de HP.`);
    }
if (valor_dmg >= 5 && valor_dmg <=10){
        console.log(`Você tem ${valor_dmg}AD`);
    }
    else{
        console.log(`Para enfrentar o boss, você precisa ter entre 5 e 10 de DMG.`);
    }
let turno = life_boss / valor_dmg;
    console.log(`Você precisará de ${Math.ceil(turno)} turnos para derrotar o boss.`);