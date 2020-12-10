/// <reference types= "cypress" />

context('Compra', () => {

    it('Efetuar uma compra de produto', () => {

        cy.backgroundLogin()
        //logar usar os cookies
        //cy.setCookie(
        //    'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        //    'R6xmma6F4U6edNQuu67M0rPopjUfg6txBuPsd2lA4oo03lANCWBG6dZDVNiZVhoZqXTiWkVOxRGttaDq0zUq0O9jlkUq%2FyV9rvFPxw7irR84NkYgy8eKtXhTCOsMZBkZB7okO56agMwVth2rt9BJGI3eKNMiFOQjiZ%2BavJAqgxHYTbEqc9kwkH4XnMkpqpLCxfLuPTS5p0GygNJKNfNp0xEAxFixm5kagTxb2PFaUUxmi410tpnkS8qtrd%2F1ASN4vGdmI3QNe%2BKull7DXvEWfnsEO4ZvFIHtwJ28VpJMYvF%2FAQhMd%2BoDiSNqU8QZwmFlYa8J4dgRentAApLnkq8q2k9l%2FSWJ%2Bb55orA0K%2BzFhQe0B%2FU5RTEjjues3AESe9%2FlKNt5YC8oeRyN7mkkRoxFifJJ4%2BXn8ex391jFIZrwrUANc4kcPTTnjkXAV5ldMfoTjBcq1w28m715f62lyhYC0g%3D%3D000349'
        //)

        cy.visit('/');

        let nomeProduto = 'Faded Short Sleeve T-shirts';

        cy.contains(nomeProduto).trigger('mouseover')

        cy.contains(nomeProduto) //identifica elemento com o texto
            .parent() //identifica o pai (h5)
            .siblings('div.button-container') // ve os irmaos 
            .children('a') // ve os filhos
            .first() // add to cart
            .click()
        
        // Validando se o produto foi adicionado ao carrinho com sucesso
        cy.get('.icon-ok')
            .parent() //h2
            .should('contain.text', 'Product successfully added to your shopping cart')

        cy.get('span#layer_cart_product_title').should('contain.text', nomeProduto)

        cy.get(".button-container a[href$='controller=order']").click()


        cy.get(".cart_navigation a[href$='order&step=1']").click()

        // se usa pra logar sem usar os cookies
        //cy.get('#email').type('arthur-agilizei@mail.com')
        //cy.get('#passwd').type('Test123')
        //cy.get('button#SubmitLogin').click()

        // Validando se o endereço de entrega é igual o de cobrança
        //[type=checkbox]#addressesAreEquals
        //asserção | atributo | valor 
        cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'checked', 'checked')
        cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'name', 'same')

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

        //1. capturar o texto do box
        cy.get('div.box').invoke('text').then((text) => {
            console.log(text)

            console.log(text.match(/[A-Z][A-Z]+/g)[1])
            //0 -> RTP
            //1 -> ID do pedido que queremos

            //2. filtrar o texto do box para extrair somente o ID do pedido
            //3. armazenar o ID do pedido de alguma forma
            //escrita de um arquivo json com o conteúdo do pedido
            //caminho do arquivo (sempre a partir do root) | conteúdo do arquivo
            cy.writeFile('cypress/fixtures/pedido.json', { id: `${ text.match(/[A-Z][A-Z]+/g)[1] }`})
        });

        cy.get(".cart_navigation a[href$='history']").click();

        //leitura de um arquivo
        //4. obter o ID do pedido armazenado de alguma forma
        cy.readFile('cypress/fixtures/pedido.json').then((pedido) => {
            cy.get('tr.first_item .history_link a').should('contain.text', pedido.id)

        })



        //Infos adicionais:
        //html
        // . = classe
        //json - json path
        //. = nivel dentro do caminho json

    });
});