const payloadLogin = require('./login.payload.json')

class LoginRequest {

    autenticacao() {
        return cy.request({
            method: "POST",
            url: "login",
            headers: {
                accept: "application/json"
            },
            failOnStatusCode: false,
            body: payloadLogin
        })
    }
}

export default new LoginRequest();