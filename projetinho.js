const prompt = require ('prompt-sync')();

const questoes = [];
const peso = [1,1,1,3,4];
const aluno = prompt(`Insira o nome do aluno: `);
const gabarito= ["a","b","c","b","a"]
let acertos = 0

for(i=0; i< 6; i++){
    questoes.push(prompt(`${i+1} - Digite a pergunta: `));
}

for(i=0;i<questoes.length;i++){
    console.log(`Digite suas respostas: `);
    let resposta = prompt(`${questoes[i]}:`)
    if(resposta == gabarito[i]){
        acertos = acertos + peso[i]
    }
}
console.log(`O aluno ${aluno} tirou ${acertos} na prova.`);