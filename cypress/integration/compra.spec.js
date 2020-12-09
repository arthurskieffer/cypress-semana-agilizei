/// <reference types= "cypress" />

context('Compra', () => {
    it('Efetuar uma compra de produto', () => {
        cy.visit('/');

        let nomeProduto = 'Faded Short Sleeve T-shirts';

        cy.contains(nomeProduto).trigger('mouseover')

        cy.contains('Faded Short Sleeve T-shirts') //identifica elemento com o texto
            .parent() //identifica o pai (h5)
            .siblings('div.button-container') // ve os irmaos 
            .children('a') // ve os filhos
            .first() // add to cart
            .click()
        
        cy.get(".button-container a[href$='controller=order']").click()

        cy.get(".cart_navigation a[href$='order&step=1']").click()

        cy.get('#email').type('arthur-agilizei@mail.com')
        cy.get('#passwd').type('Test123')
        cy.get('button#SubmitLogin').click()

        //[type=checkbox]#addressesAreEquals

        cy.get('button[name=processAddress]').click()

        cy.get('[type=checkbox]#cgv').check()

        cy.get("button[name='processCarrier']").click()

        cy.get('.bankwire').click()

        cy.get('.cart_navigation button[type=submit]')
            .find('span')
            .contains('I confirm my order')
            .click()

        cy.get(' .cheque-indent strong')
            .should('contain.text', 'Your order on My Store is complete.')
    });
});