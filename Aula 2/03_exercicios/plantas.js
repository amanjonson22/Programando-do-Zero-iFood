let plantas = [
    ["Morango", "Temperado", "60 a 80 dias"],
    ["Alface", "Temperado", "60 a 70 dias"],
    ["Couve", "Tropical", "10 a 16 semanas"],
    ["Coentro", "Tropical","30 a 70 dias"]]
    
const aPlanta = "A planta: "
const clima = "É de clima: "
const colheita = "Pode colher após: "

let n1 = prompt("Digite um número de 0 a 2: ");

console.log(aPlanta + plantas[n1][0])
console.log(clima + plantas[n1][1])
console.log(colheita + plantas[n1][2])