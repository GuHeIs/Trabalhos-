programa
{
	
	funcao inicio()
	{
        real valor1, valor2, resultado
        inteiro opcao

        escreva("\nDigite o primeiro valor: ")
        leia(valor1)

        escreva("\nDigite o segundo valor: ")
        leia(valor2)

        escreva("\n\nDigite 1 para Soma")
        escreva("\nDigite 2 para Subtração")
        escreva("\nDigite 3 para Multiplicação")
        escreva("\nDigite 4 para Divisão")
        escreva("\nDigite 5 para Fazer a Média\n")
        leia(opcao)

        escolha(opcao)
        {
            caso 1:
                resultado = valor1 + valor2
                escreva("O resultado da soma é: ", resultado)
                pare

            caso 2:
                resultado = valor1 - valor2
                escreva("O resultado da subtração é: ", resultado)
                pare

            caso 3:
                resultado = valor1 * valor2
                escreva("O resultado da multiplicação é: ", resultado)
                pare

            caso 4:
                se (valor2 != 0)
                {
                    resultado = valor1 / valor2
                    escreva("O resultado da divisão é: ", resultado)
                }
                pare

            caso 5:
                resultado = (valor1 + valor2) / 2
                escreva("O resultado da média é: ", resultado)
                pare

            caso contrario:
                escreva("Valor inválido")
                pare
        }
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 631; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */