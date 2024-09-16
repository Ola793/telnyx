export class HomePage {
  get title() {
    return cy.get("h1");
  }

  get setUpLater() {
    return cy.get("a.frontend-customer-portal-1l0ohas");
  }

  get welcomeTitle() {
    return cy.get("h2").eq(0);
  }

  get avatarCircle() {
    return cy.get("div.MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault.MuiAvatar-colorDefault.frontend-customer-portal-1isnvmx");
  }

  get dropDownMenu() {
    return cy.get("ul.MuiList-root.MuiList-padding.frontend-customer-portal-h2qsqh");
  }

  get signOutLink() {
    return cy.get("li.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.MuiMenuItem-root.MuiMenuItem-gutters.frontend-customer-portal-1pvd5zf");
  }
}