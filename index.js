/*## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" */

function calcularSaldo(vitorias , derrotas){
    calculo = vitorias - derrotas
    return calculo
}

let resultado = calcularSaldo(80 , 10)

let nivel = ""

if(resultado < 10){
    nivel = " ferro "
    }else if(resultado <= 20){
    nivel = " bronze "
    }else if(resultado <= 50){
    nivel = " prata "
    }else if(resultado <= 80){
    nivel = " ouro "
    }else if(resultado <= 90){
    nivel = " diamante "
    }else if(resultado <= 100){
    nivel = " lendário "
    }else if(resultado > 100){
    nivel = " imortal "
}

console.log(" O herói tem saldo de : " + resultado + " , e está no nível de : " + nivel)