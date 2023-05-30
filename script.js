/*let numero =[10,3,50,7,0];
let i =0
let soma =0
while(i<=numero.length-1){
soma +=numero[i]
i++
}
console.log(soma);*/


/*let r =0
for(let i =0;i<10;i++){
    r=r+i +","
}
r=r+10
console.log(r);*/


//EX1
/*
console.log("A-Adimistrador");
console.log("B-Usuário comum");5
console.log("C-Usuário assinante");


let usuario = prompt("Qual dos usuários você é?")
usuario.toUpperCase

while (usuario != "A") {

    console.log(`Acesso negado`);
    usuario = prompt("Qual dos usuários você é?")
}
console.log(`Boas vindas,admin!`)*/

//EX2

/*console.log("-vamos ver uma tabuada-");

let numero = Number(prompt("Digite um numero que você deja ver a tabuada:"));

for(let i=0;i<=10; i++){
console.log(`${i} * ${numero} = ${i*numero}`);

}*/

//EX 3

let vetor = [];
while (true) {
    var palavras = prompt("Digite uma palavra para colocar no array:");

    vetor.push(palavras);

    var sair = confirm(`Deseja adicionar mais uma palavra no array?`);
    if (sair != true) {
        break
    }
}

console.log(`As palavras do vetor são:`)
for(let i = 0;i<vetor.length;i++){
    console.log(vetor[i]);
}

