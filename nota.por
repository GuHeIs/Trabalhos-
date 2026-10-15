programa
{
	
	funcao inicio()
	{
		inteiro nota

		faca{
			escreva ("Digite uma nota: ")
			leia(nota)
		}enquanto(nota<0 ou nota>10)
		
		se(nota>=7){
			escreva("Você passou!!! :D")
		}senao se(nota>5){
		escreva("Você está em recuperação, estude mais. :|")
		}senao{
		escreva("Você reprovou, melhore")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 315; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */