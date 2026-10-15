programa
{
	
	funcao inicio()
	{
		cadeia nome
		inteiro contagem, alunos, nota, media, all_notes=0

		 escreva ("Qual o número de alunos nessa turma? ")
		 leia (alunos)
		 para(contagem=1; contagem<=alunos; contagem++){
			escreva ("\nAluno ", contagem,": ")
			escreva ("\nNome: ")
			leia (nome)
			escreva ("\nNota: ")
			leia (nota)
			se (nota >= 7 e nota < 11){
				escreva("\nEsse aluno está aprovado")
				all_notes = all_notes + nota
				contagem++
			}senao se (nota >= 5 e nota < 7){
				escreva("\nEsse aluno está em recuperação")
				all_notes = all_notes + nota
				contagem++
			}senao se (nota < 5 e nota >= 0){
				escreva("\nEsse aluno está reprovado")
				all_notes = all_notes + nota
				contagem++
			}senao
				escreva ("Nota inválida")
				contagem--
		 }
		 media= all_notes/alunos
		 escreva ("\nA média das notas é de: ", media)
		 
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 857; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */