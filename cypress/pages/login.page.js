export class LoginPage {
  open() {
    cy.visit("https://portal.telnyx.com/#/login/sign-in");
  }

  get title() {
    return cy.get("h1");
  }

  get labelForEmail() {
    return cy.get("label").eq(0);
  }

  get emailInput() {
    return cy.get("input[name='email']");
  }

  get labelForPassword() {
    return cy.get("label").eq(1);
  }

  get passwordInput() {
    return cy.get("input[name='password']");
  }

  get forgotPassword() {
    return cy.get("a[href='/#/login/password-reset']");
  }

  get resetButton() {
    return cy.get("button[type='submit']");
  }

  get resetMessage() {
    return cy.get("div.MuiBox-root.frontend-customer-portal-1qm1lh");
  }

  get passwordReset() {
    return cy.get("h1");
  }

  get loginButton() {
    return cy.get("button[type='submit']").eq(1);
  }
}