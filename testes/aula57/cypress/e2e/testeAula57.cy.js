describe("acessando a tela principal", ()=>{
    it("acessar a pagina principal", ()=>{
        cy.visit("http://127.0.0.1:5500/testes/aula57/testesFront.html")
        cy.get(':nth-child(1) > .product-image-container').should('be.visible')
    })

    it('verificar respostas de cards', ()=>{
        cy.prompt(
            "visitar http://127.0.0.1:5500/testes/aula57/testesFront.html",
            "verificar se a imagem, nome e preco esta retornando"
        )
    })
})