//tipos de variaveis
//string, int, float, booleann, caracter
// texto, inteiro, decimal, verdadeiro ou falso, letra

//cadeia nome = "Gustavo" isso é utilizado no portugol studio

//let é utilizado no javascript para u declarar variaveis que podem ser alteradas
//const é utilizado para declara variaveis que não podem ser alterada

let nome="Gabriel";
let idade=17;

console.log("Olá mundo");//console.log é utilizado para mostral algo no termuna ou console e é parecido com o escreva do portugol studio
console.log(nome);
console.log(idade);
console.log("Meu nome é "+nome+" e minha  idade é"+idade);//concatenação de strings
console.log(`Meu nome é "${nome}" e minha  idade é"${idade}`);//templante strings
console.log(idade+idade);//soma de variaveis
console.log(`A soma da minha idade com ela mesma é ${idade+idade}`); // templante string com soma de variaveis
console.log(typeof nome);//typeof é usado para mostrar o tipo de variavel
console.log(typeof idade);
console.log(typeof ("Idade é "+idade));//cuidado ao utilizar concatenação de strings com numeros, pois o resultado será uma string
alert("Olá mundo")
alerto(`Meu nome é ${nome} e minha idade é ${idade}`)