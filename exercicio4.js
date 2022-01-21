var prompt = require('prompt-sync')();

let nome = prompt (`Digite seu nome: `);
let idade = +prompt (`Digite sua idade: `);

console.log (`Escolhas uns dos animes abaixo:\n1. Kimetsu no Yaiba\n2. Code Geass\n3. Shingeki no Kiojyn\n4. Berserk\n5. Viland Saga`);

let resp = prompt (`Digite o anime escolhido: `)

    if (resp > 5)
        console.log(`Digite uma opção de 1 à 5, por favor`);
if (resp === "1"){
    console.log (`O anime escolhido foi o Kimetsu no Yaiba!`);
} else if (resp === "2"){
    console.log (`O anime escolhido foi o Boku no Hero`);    
} else if (resp === "3"){
    console.log(`O anime escolhido foi o Shingeki no Kiojyn`);
} else if (resp === "4"){
    console.log(`O anime escolhido foi o Berserk`);
} else if (resp === "5"){
    console.log(`\nO anime escolhido foi o Viland Saga`);
} 
