const elements = require('./elements').ELEMENTS

class Home {

    validarAcessoHome() {
        cy.get(elements.txtBemVindo).should(($text) => {
            expect($text.text(), 'Texto para validar').to.equal("Bem Vindo  Fulano da Silva")
        })
    }
}

export default new Home();