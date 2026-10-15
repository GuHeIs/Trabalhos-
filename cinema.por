programa
{
	
	funcao inicio()
	{
		cadeia filme, cb_resp
		inteiro ingressos
		real valor_ingresso=30.00, valor_total, comida_bebida=10.00, todos_ingressos, vlr_cb_ing=0.0, vlr_ncb_ing=0.0
		logico comidaebebida

		escreva ("Qual o nome do filme? ")
		leia (filme)
		escreva ("\nQuantos ingressos vai querer?" )
		leia (ingressos)

		todos_ingressos = valor_ingresso * ingressos

		escreva ("\nO valor do(s) seu(s) ingresso(s) é de", todos_ingressos ,", vai querer comida e bebida?(sim ou não) ")
		leia (cb_resp)
		se (cb_resp == "Sim"){
			comidaebebida = verdadeiro
			vlr_cb_ing = todos_ingressos + comida_bebida
		}senao{
			comidaebebida = falso
			vlr_ncb_ing = todos_ingressos + 0
		}
		se(vlr_cb_ing > 150.00){
			valor_total = vlr_cb_ing * 0.15
		}senao se(vlr_ncb_ing > 120.00){
			valor_total = vlr_ncb_ing * 0.10
		}senao{
			valor_total = todos_ingressos
		}
		escreva ("\nO valor total ficou ",valor_total)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 193; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */