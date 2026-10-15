programa
{
	
	funcao inicio()
	{
		cadeia nome, desconto
		inteiro opcao = 0 , quant_comum = 0, quant_VIP = 0, quant_premium = 0, quant_total = 0, contador
		real valor_compra = 0.0, valor_original=0.0
		escreva ("Digite seu nome: ")
		leia(nome)

		enquanto(opcao != 4){
			limpa()
			escreva ("\n1. Ingresso comum - R$ 25,00 \n2. Ingresso VIP - R$ 50,00 \n3. Ingresso Premium - R$ 80,00 \n4. Finalizar compra\n")
			leia (opcao)

			escolha (opcao){
				caso 1:
				faca{
					escreva ("Informe a quantidade de ingressos: ")
					leia (quant_comum)
				}enquanto(quant_comum<=0)
				valor_compra = valor_compra + (quant_comum*25.00)
				quant_total = quant_total + quant_comum
				pare
				caso 2:
				faca{
					escreva ("Informe a quantidade de ingressos: ")
					leia (quant_VIP)
				}enquanto(quant_VIP<=0)
				valor_compra = valor_compra + (quant_VIP*50.00)
				quant_total = quant_total + quant_VIP
					pare
				caso 3:
				 faca{
					escreva ("Informe a quantidade de ingressos: ")
					leia (quant_premium)
				}enquanto(quant_premium<=0)
				valor_compra = valor_compra + (quant_premium*25.00)
				quant_total = quant_total + quant_premium
				 	pare
				caso contrario:
					pare
			}
			para (contador=1; contador<=quant_total; contador++){
				escreva("\nIngresso ", contador ," adicionado")
			}
		}
		valor_original=valor_compra
		escreva ("\nTotal de ingressos comprados: ", quant_total)
		se(valor_compra>200.00){
			valor_compra=valor_compra-(valor_compra*0.15)
			desconto="\nDesconto de 15%"
		}senao se(valor_compra>100.00){
			valor_compra=valor_compra-(valor_compra*0.10)
			desconto="\nDesconto de 10%"
		}senao se(valor_compra>50.00){
			valor_compra=valor_compra-(valor_compra*0.05)
			desconto="\nDesconto de 5%"
		}senao{
			desconto="\nSem desconto"
		}
		limpa()
		escreva ("\nNota Fiscal\n")
		escreva ("Nome do cliente: ", nome)
		se (quant_comum > 0){
		escreva ("\nIngressos comuns: ", quant_comum)
		}
		se (quant_VIP > 0){
		escreva ("\nIngressos VIP: ", quant_VIP)
		}
		se (quant_premium > 0){
		escreva ("\nIngressos premium: ", quant_premium)
		}
		escreva ("\nQuantidade de ingressos: ", quant_total)
		escreva ("\nValor Original da compra: ", valor_original)
		escreva (desconto)
		escreva ("\nValor final: ",valor_compra)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 2094; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */