let saldoDePartidas = soma(35, 21)
let nivel = ""

function soma(vitoria, derrota){
    let calculoPdl = vitoria - derrota
    return calculoPdl
}
    
    if (saldoDePartidas <= 10){
        nivel = "Ferro"
    } else if (saldoDePartidas <=20){
        nivel = "Bronze"
    } else if (saldoDePartidas <=50){
        nivel = "Prata"
    } else if (saldoDePartidas <=80){
        nivel = "Ouro"
    } else if (saldoDePartidas <=90){
        nivel = "Diamante"
    } else if (saldoDePartidas <=100){
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }

console.log("O Herói tem um saldo de partidas de " + saldoDePartidas + " pontos e está rankeado no " + nivel)