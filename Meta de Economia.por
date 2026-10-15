programa
{
    funcao inicio()
    {
    	
        cadeia nome
        real meta, totalEconomizado = 0.0, deposito, restante, sobra
        inteiro quantidadeDepositos = 0

        escreva("Digite o nome do usuário: ")
        leia(nome)

        escreva("Digite o valor da meta: R$ ")
        leia(meta)

        enquanto (totalEconomizado < meta)
        {
            escreva("\nDigite o valor depositado: R$ ")
            leia(deposito)

            se (deposito > 0)
            {
                totalEconomizado = totalEconomizado + deposito
                quantidadeDepositos = quantidadeDepositos + 1

                escreva("Total economizado: R$ ", totalEconomizado, "\n")

                restante = meta - totalEconomizado

                se (restante > 0)
                {
                    escreva("Faltam R$ ", restante, " para atingir a meta.\n")
                }
            }
            senao
            {
                escreva("Valor inválido!\n")
            }
        }

        sobra = totalEconomizado - meta

        escreva("\nRESUMO FINAL")
        escreva("\nNome do usuário: ", nome)
        escreva("\nValor da meta: R$ ", meta)
        escreva("\nTotal economizado: R$ ", totalEconomizado)
        escreva("\nQuantidade de depósitos: ", quantidadeDepositos)

        se (sobra > 0)
        {
            escreva("\nValor que sobrou: R$ ", sobra, "")
        }
        senao
        {
            escreva("Valor que sobrou: R$ 0\n")
        }

        escreva("\nParabéns, ", nome, "! Você atingiu sua meta de economia!\n")
    }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 282; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */