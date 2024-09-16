import { MainPage } from "../pages/main.page.spec.js";
import { SignUpPage } from "../pages/sign-up.page.spec.js";
import { LoginPage } from "../pages/login.page.spec.js";
import { HomePage } from "../pages/home.page.spec.js";

describe("telnyx check", () => {
  const mainPage = new MainPage();
  const signUpPage = new SignUpPage();
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const emailForSignUp = Cypress.env("emailForSignUp");
  const firstName = "Name";
  const lastName = "Surname";
  const passwordForSignUp = Cypress.env("passwordForSignUp");

  const email = Cypress.env("email");
  const password = Cypress.env("password");

  beforeEach(() => {
    mainPage.open();

    mainPage.acceptCookies.should("be.visible").click();
  });

  it("sign up check", () => {
    mainPage.title.should("have.text", "Modular, resilient communications and connectivity");

    mainPage.signUpButton.should("be.visible").click();

    signUpPage.title.should("have.text", "Create a Telnyx account");

    signUpPage.emailInput.type(emailForSignUp).focus().should("have.css", "border-color", "rgb(0, 163, 122)");

    cy.wait(5000);

    signUpPage.firstNameInput.type(firstName).focus().should("have.css", "border-color", "rgb(0, 163, 122)");

    signUpPage.lastNameInput.type(lastName).focus().should("have.css", "border-color", "rgb(0, 163, 122)");

    signUpPage.passwordInput.type(passwordForSignUp).focus().should("have.css", "border-color", "rgb(0, 163, 122)");

    signUpPage.agreementCheckBox.click();

    signUpPage.submitButton.should("be.enabled").click();

    cy.wait(5000);

    // signUpPage.lastStep.should("have.text", "One last step");
  });

  it("log in check", () => {
    mainPage.loginButton.should("be.visible").should("have.attr", "target", "_blank").invoke("removeAttr", "target").click();

    cy.url().should("include", "/login/sign-in");

    loginPage.title.should("be.visible").should("have.text", "Log in");

    loginPage.labelForEmail.should("be.visible").should("have.text", "Business Email *");

    loginPage.emailInput.should("be.visible").type(email).should("have.attr", "aria-invalid", "false");

    loginPage.labelForPassword.should("be.visible").should("have.text", "Password *");

    loginPage.passwordInput.should("be.visible").type(password).should("have.attr", "aria-invalid", "false");

    loginPage.loginButton.should("be.visible").should("be.enabled").click();

    // homePage.title.should("have.text", "Log in");

    // homePage.setUpLater.should("be.visible").should("have.text", "Set Up Later").click();

    // homePage.welcomeTitle.should("be.visible").should("have.text", "Welcome to Telnyx!");
  });

  it.skip("log out check", () => {
    mainPage.loginButton.should("be.visible").should("have.attr", "target", "_blank").invoke("removeAttr", "target").click();

    cy.url().should("include", "/login/sign-in");

    loginPage.title.should("be.visible").should("have.text", "Log in");

    loginPage.labelForEmail.should("be.visible").should("have.text", "Business Email *");

    loginPage.emailInput.should("be.visible").type(email).should("have.attr", "aria-invalid", "false");

    cy.wait(5000);

    loginPage.labelForPassword.should("be.visible").should("have.text", "Password *");

    loginPage.passwordInput.should("be.visible").type(password).should("have.attr", "aria-invalid", "false");

    loginPage.loginButton.should("be.visible").should("be.enabled").click();

    // cy.wait(5000);

    // homePage.title.should("have.text", "Log in");

    // homePage.setUpLater.should("be.visible").should("have.text", "Set Up Later").click();

    // homePage.welcomeTitle.should("be.visible").should("have.text", "Welcome to Telnyx!");

    // homePage.avatarCircle.should("be.visible").trigger("mouseover");

    // homePage.dropDownMenu.should("be.visible");

    // homePage.signOutLink.should("be.visible").click();

    // loginPage.title.should("be.visible").should("have.text", "Log in");
  });

  it("password reset", () => {
    mainPage.loginButton.should("be.visible").should("have.attr", "target", "_blank").invoke("removeAttr", "target").click();

    loginPage.title.should("be.visible").should("have.text", "Log in");

    loginPage.forgotPassword.should("be.visible").should("have.text", "Forgot your password?").click();

    loginPage.passwordReset.should("be.visible").should("have.text", "Password Reset");

    loginPage.labelForEmail.should("be.visible").should("have.text", "Your Email Address *");

    loginPage.emailInput.should("be.visible").type(email).should("have.attr", "aria-invalid", "false");

    loginPage.resetButton.should("be.visible").should("be.enabled").click();

    loginPage.resetMessage.should("be.visible").should("have.text", "We have accepted your password reset request. If you have a Telnyx account and are unable to reset your password successfully, please contact support for assistance.");
  });

  it("sign up for our marketing newsletter", () => {
    mainPage.connectWithUs.scrollIntoView().should("be.visible", { timeout: 15000 });

    cy.wait(5000);

    mainPage.emailInput.should("be.visible").should("have.attr", "placeholder", "Enter business email").type(email).focus().should("have.css", "border-color", "rgb(0, 163, 122)");

    mainPage.submitButton.should("be.visible").should("be.enabled").click();

    signUpPage.title.should("have.text", "Create a Telnyx account");
  });

  it("check LinkedIn redirecting", () => {
    mainPage.socialMedia.scrollIntoView().should("be.visible", { timeout: 15000 });

    cy.wait(5000);

    mainPage.linkedIn.should("be.visible").should("have.attr", "target", "_blank").invoke("removeAttr", "target").click();

    cy.origin("https://www.linkedin.com", () => {
      cy.url().should("include", "linkedin.com/company/telnyx/", { timeout: 15000 });
    });
  });

  it("check X redirecting", () => {
    mainPage.socialMedia.scrollIntoView().should("be.visible", { timeout: 15000 });

    mainPage.X.should("be.visible").should("have.attr", "target", "_blank").invoke("removeAttr", "target").click();

    cy.origin("https://x.com/telnyx", () => {
      cy.url().should("include", "x.com/telnyx", { timeout: 15000 });
    });
  });

  it("check Facebook redirecting", () => {
    mainPage.socialMedia.scrollIntoView().should("be.visible", { timeout: 15000 });

    mainPage.fB.should("be.visible").should("have.attr", "target", "_blank").invoke("removeAttr", "target").click();

    cy.origin("https://www.facebook.com/Telnyx/", () => {
      cy.url().should("include", "facebook.com/Telnyx/", { timeout: 15000 });
    });
  });

  it("check solutions link", () => {
    mainPage.solutionsLink.should("be.visible").click();

    mainPage.solutionsLink.should("be.visible").should("have.text", "Solutions");
  });

  it("check return to main page", () => {
    mainPage.solutionsLink.should("be.visible").click();

    mainPage.solutionsLink.should("be.visible").should("have.text", "Solutions");

    mainPage.logo.find("a[href='/']").should("exist").click(); 
  });
})