/// <reference types="cypress" />
import produtosPage from '../support/page_objects/produtos.page';
context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('minha-conta')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    cy.login('contato.iansilverio@gmail.com' , 'senha@123')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, contato.iansilverio')
    cy.visit('produtos')
    cy.get('.post-3374 > .product-block').click()
    produtosPage.addProdutoCarrinho('34' , 'Black' , 2)
    cy.get('.woocommerce-message').should('contain' , '2 × “Apollo Running Short” foram adicionados no seu carrinho.')
    cy.adicionarProduto('Argus All-Weather Tank' , 'S' , 'Gray' , 2)
    cy.get('.woocommerce-message').should('contain' , '2 × “Argus All-Weather Tank” foram adicionados no seu carrinho.')
    cy.concluirCompra('Ian' , 'Silvério' , 'Brasil' , 'Av Domingos de Moraes, 28' , 'Londrina' , 'São Paulo' , '05065-001' , '14953467525')
  });

})
