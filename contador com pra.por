programa
{
	
	funcao inicio()
	{
		inteiro contagem, v_info, dobro
		escreva ("Informe um valor inteiro positivo maior que zero: ")
		leia (v_info)
		se (v_info <= 0){
			escreva ("Valor invalido")
		}
		para(contagem=1; contagem<=v_info; contagem++){
			dobro = contagem * 2 
			escreva ("\n", contagem, ". O dobro é:  ", dobro)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 281; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */