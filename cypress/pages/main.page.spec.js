export class MainPage {
  open() {
    cy.visit("https://telnyx.com");
  }

  get acceptCookies() {
    return cy.get("#onetrust-accept-btn-handler");
  }
  
  get title() {
    return cy.get("h1");
  }

  get solutionsLink() {
    return cy.get("a[href='/solutions']");
  }

  get logo() {
    return cy.get("div.c-buvHyO.c-buvHyO-idbhasO-css");
  }

  get solutionsTitle() {
    return cy.get("h1");
  }

  get signUpButton() {
    return cy.get("#header-sign-up");
  }

  get loginButton() {
    return cy.get("a[href='https://portal.telnyx.com/']").eq(0);
  }

  get connectWithUs() {
    return cy.get("h2.c-PJLV.c-fKwEGa.c-PJLV-jgSmhu-alt-true.c-PJLV-ihBhmYj-css").eq(3);
  }

  get emailInput() {
    return cy.get("#email");
  }

  get submitButton() {
    return cy.get("button.c-kDQqQr.c-kDQqQr-fwzCzT-background-light.c-kDQqQr-cOvXws-cv").eq(1);
  }

  get socialMedia() {
    return cy.get("ul.c-ejcPbY");
  }

  get linkedIn() {
    return cy.get("a[href='https://www.linkedin.com/company/telnyx/']");
  }

  get X() {
    return cy.get("a[href='https://twitter.com/telnyx']");
  }

  get fB() {
    return cy.get("a[href='https://www.facebook.com/Telnyx/']");
  }
}
