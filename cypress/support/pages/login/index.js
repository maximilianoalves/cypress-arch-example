const elements = require('./elements').ELEMENTS

class Login {
    acessar() {
        cy.visit('/')
    }

    preencherLogin(email, senha) {
        cy.get(elements.email).type(email);
        cy.get(elements.senha).type(senha);
    }

    clickBtnEntrar() {
        cy.get(elements.btnEntrar).click();
    }
}

export default new Login();