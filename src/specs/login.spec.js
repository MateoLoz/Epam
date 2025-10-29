const { expect } = require("@wdio/globals");
const LoginPage = require("../PO/pages/login.page");

describe("Login Feature", () => {
  it("should see an error message without valid credentials", async () => {
    await LoginPage.open();
    await LoginPage.form.enterCredentials("Mateo", "Loz1423-");
    await LoginPage.form.resetUser("");
    await LoginPage.form.resetPassword("");
    await LoginPage.form.login();
    await expect(LoginPage.errorMessage).toBeExisting();
    await expect(LoginPage.errorMessage).toHaveText(
      expect.stringContaining("Epic sadface: Username is required")
    );
  });

  it("should see an error message login with only Username", async () => {
    await LoginPage.open();
    await LoginPage.form.enterCredentials("Mateo", "");
    await LoginPage.form.resetPassword("");
    await LoginPage.form.login();
    await expect(LoginPage.errorMessage).toBeExisting();
    await expect(LoginPage.errorMessage).toHaveText(
      expect.stringContaining("Epic sadface: Password is required")
    );
  });

  it("should see the Admin Panel", async () => {
    await LoginPage.open();
    await LoginPage.form.enterCredentials("standard_user", "secret_sauce");
    await LoginPage.form.login();
    await expect(LoginPage.header.AdminLogo).toBeExisting();
    await expect(LoginPage.header.AdminLogo).toHaveText(
      expect.stringContaining("Swag Labs")
    );
  });
});
