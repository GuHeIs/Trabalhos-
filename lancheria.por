programa
{
    funcao inicio()
    {
        cadeia nome
        inteiro opcao, quantidade
        cadeia cupom
        cadeia Produto
        real preco, total, desconto, valorFinal, valorPago, troco

        escreva("Nome do cliente: ")
        leia(nome)

        escreva("\nEscolha o que irá pedir\n")
        escreva("1. Hambúrguer - R$ 18,00\n")
        escreva("2. Cachorro-quente - R$ 12,00\n")
        escreva("3. Batata frita - R$ 10,00\n")
        escreva("4. Refrigerante - R$ 6,00\n")
        escreva("5. Combo completo - R$ 35,00\n")

        escreva("\nEscolha uma opção: ")
        leia(opcao)

        escreva("Quantidade desejada: ")
        leia(quantidade)

        escreva("Possui cupom de desconto? (S/N): ")
        leia(cupom)

        escreva("Valor entregue para pagamento: R$ ")
        leia(valorPago)

        escolha(opcao)
        {
            caso 1:
                Produto = "Hambúrguer"
                preco = 18.0
                pare

            caso 2:
                Produto = "Cachorro-quente"
                preco = 12.0
                pare

            caso 3:
                Produto = "Batata frita"
                preco = 10.0
                pare

            caso 4:
                Produto = "Refrigerante"
                preco = 6.0
                pare

            caso 5:
                Produto = "Combo completo"
                preco = 35.0
                pare

            caso contrario:
                escreva("\nOpção inválida!")
                retorne
        }

        total = preco * quantidade

        se (cupom == "Sim" ou cupom == "sim")
        {
            desconto = total * 0.10
        }
        senao
        {
            desconto = 0
        }

        valorFinal = total - desconto

        escreva("Cliente: ", nome, "\n")
        escreva("Produto: ", Produto, "\n")
        escreva("Quantidade: ", quantidade, "\n")
        escreva("Valor total: R$ ", total, "\n")
        escreva("Desconto: R$ ", desconto, "\n")
        escreva("Valor a pagar: R$ ", valorFinal, "\n")

        se (valorPago >= valorFinal)
        {
            troco = valorPago - valorFinal
            escreva("Troco: R$ ", troco, "\n")
        }
        senao
        {
            escreva("Valor insuficiente! Faltam R$ ", valorFinal - valorPago, "\n")
        }
    }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1804; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */