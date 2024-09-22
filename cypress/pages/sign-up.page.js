export class SignUpPage {
  get title() {
    return cy.get("h1");
  }
  
  get emailInput() {
    return cy.get("#email");
  }

  get firstNameInput() {
    return cy.get("#first_name");
  }

  get lastNameInput() {
    return cy.get("#last_name");
  }
  
  get passwordInput() {
    return cy.get("#password");
  }
  
  get agreementCheckBox() {
    return cy.get("#terms_and_conditions");
  }
  
  get submitButton() {
    return cy.get("button[type='submit']").eq(0);
  }
  
  get lastStep() {
    return cy.get("h1 span.c-PJLV");
  }
}