## desafio POO - sistema de entrega

questão 1
analize as possiveis classes e suas variações:

- Cliente

- Pedido

- Produto 
  - tipos de produtos (bebida, sobremesa, hamburguer ...)

- Pagamento
  - tipos de pagamento (pix, dinheiro, cartão ...)


Agora que temos uma primeira ideia das entidades do sistema, precisamos entender melhor cada uma delas.

Imagine que você precisa explicar para outro desenvolvedor como cada entidade funciona.

Questão 2
Para cada entidade identificada anteriormente, responda:

Quais informações precisamos guardar sobre ela?

- produtos: 
    tipos => (nome, marca(para produtos como bebidas/refrigerantes), preço, descrição)
- pedidos: 
    produtos, quantidade, preco total (se tiver entrega o endereço), pagamento
- cliente: 
    nome, pedidos, endereço, cartão
- pagamento:
    cartão, pix, dinheiro

Quais ações ela precisa realizar?



Quais informações não deveriam ser alteradas livremente por qualquer parte do sistema?
Não é necessário escrever código.

Organize suas respostas pensando em:

O que essa entidade sabe?

O que essa entidade faz?

2. Pedido
Atributos
numero
cliente
produtos
pagamento
status
Métodos
adicionarProduto()
removerProduto()
calcularTotal()
adicionarPagamento()
finalizarPedido()
exibirResumo()

3. Produto
Atributos
nome
preco
Métodos
calcularPrecoFinal()
exibirDescricao()

3.1 Hambúrguer
Atributos
tipoPao
adicionais
Métodos
adicionarAdicional()
removerAdicional()
calcularPrecoFinal()
exibirDescricao()

3.2 Bebida
Atributos
tamanho
possuiGelo
Métodos
adicionarGelo()
removerGelo()
calcularPrecoFinal()
exibirDescricao()

3.3 Sobremesa
Atributos
tipo
possuiEmbalagem
possuiDescartaveis
Métodos
adicionarEmbalagem()
adicionarDescartaveis()
calcularPrecoFinal()
exibirDescricao()