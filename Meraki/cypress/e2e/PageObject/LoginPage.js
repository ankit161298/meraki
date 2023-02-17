class Login {
    getEmail() {
        return cy.get('#input-login-email');
    }
    getPassWord() {
        return cy.get('#input-login-password');
    }
    getLoginButton() {
        return cy.get('#button-login');
    }
    getLoginCheckBox() {
        return cy.get('.login-options > :nth-child(1) > label > input');
    }
}

export default Login;