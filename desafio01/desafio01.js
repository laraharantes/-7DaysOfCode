//Comparar as variaveis

function compararValores(nome1, valor1, nome2, valor2) {
    if(valor1 === valor2) {
        return `As variáveis ${nome1} e ${nome2} possuem o mesmo valor e o mesmo tipo`;
    } else if(valor1 == valor2) {
        return `As variáveis ${nome1} e ${nome2} possuem o mesmo valor, mas tipos diferentes`;
    } else {
       return `As variáveis ${nome1} e ${nome2} não têm o mesmo valor`;
    }
}



let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'
let numeroQuarenta = 40;
let stringQuarenta = '50';

console.log(compararValores("numeroUm", numeroUm, "stringUm", stringUm));
console.log(compararValores("numeroTrinta", numeroTrinta, "stringTrinta", stringTrinta));
console.log(compararValores("numeroDez", numeroDez, "stringDez", stringDez));
console.log(compararValores("numeroQuarenta", numeroQuarenta, "stringQuarenta", stringQuarenta));