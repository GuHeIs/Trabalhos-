let trabalho1 = 5
let trabalho2 = 4
let trabalho3 = 5
let trabalho4 = 8
let trabalho5 = 7
let nota = (trabalho1 + trabalho2 + trabalho3 + trabalho4 + trabalho5)/5
let ano = "segundo"

if(nota <=10 && nota >= 7 && ano == "primeiro"){
    console.log(`Sua nota  é ${nota}. Aprovado para o segundo ano.`);
}else if(nota < 7 && nota >= 5 && ano == "primeiro"){
    console.log(`Sua nota  é ${nota}. Recuperação, estude mais para passar.`);
}else if(nota < 5 && nota >= 0 && ano == "primeiro"){
    console.log(`Sua nota  é ${nota}. Reprovado! Repetirá o primeiro ano.`);
}if(nota >= 7 && nota <= 10 && ano == "segundo"){
    console.log(`Sua nota é ${nota}. Aprovado para o terceiro ano.`);
}else if(nota >= 5 && nota < 7 && ano == "segundo"){
    console.log(`Sua nota é ${nota}. Recuperação, estude mais para passar.`);
}else if(nota < 5 && nota >= 0 && ano == "segundo"){
    console.log(`Sua nota é ${nota}. Reprovado! Repetirá o segundo ano.`);
}else if(nota <=10 && nota >= 7 && ano == "terceiro"){
    console.log(`Sua nota  é ${nota}. Você vai se formar!`);
}else if(nota < 7 && nota >= 5 && ano == "terceiro"){
    console.log(`Sua nota  é ${nota}. Recuperação, estude mais para passar.`);
}else if(nota < 5 && nota >= 0 && ano == "terceiro"){
    console.log(`Sua nota  é ${nota}. Reprovado! Repetirá o terceiro ano.`);
}else{
    console.log(`Informações inválidas.`);
}