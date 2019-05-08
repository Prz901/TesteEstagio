// vetor de vogais 
let vogais = ["a","e","i","o","u","A","E","I","O","U"]
// string do exercicio 1 
let string = "Felipe"
// vetor de numeros do exercicio 2
let vetor = [1,2,3,1,3,4,5]

//Funcao que descubre a quantidade de vogais de uma determinada string.
function verificaVogais(string, vogais){
    let count = 0
    for(let i = 0; i< string.length; i++){
        for(let j = 0; j<vogais.length; j++){
            if(string[i] == vogais[j]){
                count++
            }
        }
    }
    console.log("Quantidade de vogais nessa string:",count)
}

//Funcao que identifica se em um determinado vetor, existem ou não valores repetidos
function verificaValor(vetor){
    let count = 0
    for(let i = 0; i < vetor.length; i++){
        for(let j = i+1; j<vetor.length-1; j++){
            if(vetor[i]== vetor[j]){
                count++
            }
        }
    }
    return count
}

// Funcao que descobre se um valor é positivo ou negativo (considere o valor zero como positivo)

function positivoOuNegativo(x){
    if(x >=0){console.log("Numero positivo:", x)}
    else{console.log("Numero negativo:", x)}
}

/* Funcao de recursao - Algoritmo que some os dígitos de 1 até n
    Digite um numero: 5
    1 + 2 + 3 + 4 + 5 = 15
*/
function somatoriaRec(numero, soma){
    if(numero == 0){
        return soma
    }
    return somatoriaRec(numero-1,soma+=numero)
}

// Coloquei as chamadas das funçoes em baixo para facilitar a visualizacao do codigo

//Chamada da funcao que verifica quantas vogais existem numa determinada string
verificaVogais(string, vogais)

/* Chamada da  funcao que recebe se existe ou nao valor repetido, 
caso valor seja 1 seria o equivalente a existe, 0 a nao existe valor repetido no vetor.*/
let existe = verificaValor(vetor)
if(existe != 0){
    console.log("Existe valor repetido no vetor:", existe)
}
else{
    console.log("Nao Existe valor repetido nesse vetor")
}

// Chamada da funcao que verifica se o valor e positivo ou negativo.
let x = 5
positivoOuNegativo(x)

// Chamada da funcao de recursao
let numero = 8
console.log("Resultado da somatoria:",somatoriaRec(numero,0))
