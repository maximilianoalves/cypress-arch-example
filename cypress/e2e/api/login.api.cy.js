import LoginRequest from '../../support/requests/login/login.request'

describe('Login', () => {
  it('Deve realizar o login com sucesso', () => {
    LoginRequest.autenticacao().should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.not.null
    })
  })
})