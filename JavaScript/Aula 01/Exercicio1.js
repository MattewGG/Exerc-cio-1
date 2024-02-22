//1 – Ler um valor e escrever se é positivo, negativo ou zero.
//2 - Ler as notas da 1a e 2a avaliação de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que se a nota for igual ou maior que 7 o aluno é aprovado). Escrever também a média calculada.
//3 - Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).
//4 - Ler 2 valores e escrever o maior deles.
//5 - Ler 2 valores e escrevê-los em ordem crescente.
//6 - Ler 3 valores e escrever o maior deles.
//7 - Ler 3 valores e escrever a soma dos 2 maiores.
//8 - Ler 3 valores e escrevê-los em ordem crescente.
//9 - Faça um algoritmo que leia um nº inteiro e mostre uma mensagem indicando se este número é par ou ímpar. Ex: se (x%2=0) “x é par”, se (x%2=1) “x é impar”.
//10.  Leia quantos gols o TIME A marcou em uma partida e leia quantos gols o TIME B marcou. Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.

const num1 = 44;
//1) normal
if (num1>0){
   console.log("Positivo") 
}else if(num1<0){
    console.log(`Negativo ${num1}`)
}else{
    console.log("É 0")
}
//2) notas 
const nota1 = 10;
const nota2 = 5;
const soma = (nota1+nota2)/2;
if (soma<=7){
    console.log("aprovado")
}else{
    console.log("reprovado")
}
//3) votação
const nascimento = 1999;
const ano = 2024;

if (ano - nascimento >= 18){
    console.log("Pode virar")
}else{
    console.log("Pirralho")
}

//4) valor 

const maior = 5;
const menor = 2; 

if (maior<menor){
    console.log(`${menor} é maior que  ${maior}`)
}else{
    console.log(`${maior} é maior que ${menor}`)
}

//5) 

var numeros = [12, 12, 34, 17, 167];

numeros.sort(function (a, b) {
    return a - b;
  });

console.log(numeros);

// 6) 

const valor1 = 1;
const valor2 = 2;
const valor3 = 3;

if (valor1>valor2 && valor1>valor3 && valor2>valor3){

    console.log( valor3, valor2, valor1,);


}else if (valor1>valor2 && valor1>valor3 && valor3>valor2){
    console.log( valor2, valor3, valor1,);

}else if(valor2>valor1 && valor2>valor3 && valor3>valor1){
    console.log( valor1, valor3, valor2,);

}else if (valor2>valor1 && valor2>valor3 && valor1>valor3){
    console.log( valor3, valor1, valor2,);

}else if(valor3>valor1 && valor3>valor2 && valor2>valor1){
    console.log( valor1, valor2, valor3);

}else{
    console.log( valor2, valor1, valor3);

}

// 7)

const valo11 = 1;
const valo12 = 2;
const valo13 = 3;

let maie = Math.max(valo11, valo12, valo13);
let seg;
switch(maie){
    case valo11:
        seg = Math.max(valo12, valo13);
        break;
    case valo12:
        seg = Math.max(valo11, valo13);
    case valo13:
        seg = Math.max(valo12, valo11)    
        break;

}

console.log(maie + seg);

// 8)
let men;


switch(maie){
    case valo11:
        seg = Math.max(valo12, valo13);
        men = Math.min(valo12, valo13);
        break;
    case valo12:
        seg = Math.max(valo11, valo13);
        men = Math.min(valo11, valo13);
    case valo13:
        seg = Math.max(valo12, valo11);
        men = Math.min(valo12, valo11);    
        break;

}
console.log(men, seg, maie)

//9)

const par = 2;

if(par%2 ==0){
    console.log("par")
}else{
    console.log("impar")
}

// 10)

let timeA = 10;
let timeB = 10;

if(timeA>timeB){
    console.log("Time A VENCEU")
}else if(timeB>timeA){
    console.log("Time b VENCEU")
}else{
    console.log("Empate")
}