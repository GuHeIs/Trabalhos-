/*
//Array = vetores

let carros = ["BMW", "Mercedes", "Audi", "Ferrari", 1, 2, 3];
//Se não utilizasse o vetor, teriamos que criar uma variavel para cada carro, como por exemplo:
// let carro1 = "BMW";
// let carro1 = "Mercedes";
// let carro1 = "Audi";
// let carro1 = "Ferrari";

alert (carros[0])
let carro_caro =carros[3];
alert(carro_caro)

alert (carros.length);
alert (carros.sort());
alert (carros.length-1);

carros.push ("Porsche")
carros.push ("Lamborghini")
carros.pop()
for(let i=0; i<carros.length; i++){
    alert (carros[i]);
}
*/
//arrays bidimensional
let jogos = [
    ["FIFA", "PES", "NBA"], 
    ["GTA", "Mafia", "Need For Speed"], 
    ["Call off Duty", "Battlefield", "Far Cry"]
];
alert (jogos[1][2]);
alert (jogos[2][1]);

for(let i=0; i<jogos.length; i++){
    for(let j=0; j<jogos[i].length; j++);
    alert(jogos[i][j]);
}