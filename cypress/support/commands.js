Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('preCadastro' , (email, senha, nome, sobrenome) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('.woocommerce-Button').click()
});

Cypress.Commands.add('complementoCadastro', (nome, sobrenome, usuario) => {
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('#account_display_name').type(usuario)
    cy.get('.woocommerce-Button').click()
});

Cypress.Commands.add('adicionarProduto' , (nomeProduto, tamanho, cor, quantidade) => {
    cy.get('[name="s"]').eq(1).type(nomeProduto)
    cy.get('.button-search').eq(1).click()
    cy.get('.button-variable-item-'+ tamanho).click().click()
    cy.get(`.button-variable-item-${cor}`).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
});

Cypress.Commands.add('concluirCompra' , (nome , sobrenome , pais , endereco , cidade , estado , cep , telefone) => {
    cy.get('.woocommerce-message > .button').click()
    cy.get('.page-title').should('exist')
    cy.get('.checkout-button').click()
    cy.get('#billing_first_name').clear().type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#select2-billing_country-container').click()
    cy.get('.select2-search__field').type(pais).type("{enter}")
    cy.get('#billing_address_1').clear().type(endereco)
    cy.get('#billing_city').clear().type(cidade)
    cy.get('#select2-billing_state-container').click()
    cy.get('.select2-search__field').type(estado).type("{enter}")
    cy.get('#billing_postcode').clear().type(cep)
    cy.get('#billing_phone').clear().type(telefone)
    cy.get('#terms').click()
    cy.get('#place_order').click()
    cy.get('.woocommerce-notice').should('contain' , 'Obrigado. Seu pedido foi recebido.')
})