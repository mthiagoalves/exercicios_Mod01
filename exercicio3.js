let prompt = require("prompt-sync")();

//**************EXERCICIO 04**************

let dias = +prompt("Quantos dias você tem de vida? ");

let ano = Math.floor (dias / 365)
let mes = Math.floor ((dias % 365) / 30);
let dia = ((dias % 365) % 30);

console.log(`Você tem ${ano}, dias de vida, ${mes} meses e ${dia} dias de vida.`);