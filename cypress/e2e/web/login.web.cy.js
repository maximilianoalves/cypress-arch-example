import Login from '../../support/pages/login'
import Home from '../../support/pages/home'

describe('Login', () => {
  it('Deve realizar o login com sucesso', () => {
    Login.acessar()
    Login.preencherLogin('fulano@qa.com', 'teste')
    Login.clickBtnEntrar();
    Home.validarAcessoHome();
  })
})