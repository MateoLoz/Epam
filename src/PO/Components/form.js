const { $ } = require("@wdio/globals");

class Form {
  get inputUserName() {
    return $("#user-name");
  }
  get inputPassword() {
    return $("#password");
  }
  get btnSubmit() {
    return $("#login-button");
  }

  async login() {
    this.btnSubmit;
    setTimeout(() => {
      this.btnSubmit.click();
    }, 2500);
  }

  async enterCredentials(nombre, password) {
    await this.inputUserName.click();
    await this.inputUserName.addValue(nombre);

    await this.inputPassword.click();
    await this.inputPassword.addValue(password);

    return;
  }

  async resetUser() {
    const value = await this.inputUserName.getValue();
    const valueLength = value.length;
    // Clear the input field by sending a series of backspace key presses
    for (let i = 0; i < valueLength; i++) {
      await this.inputUserName.addValue("\uE003");
    }
  }

  async resetPassword() {
    const value = await this.inputPassword.getValue();
    const valueLength = value.length;
    // Clear the input field by sending a series of backspace key presses
    for (let i = 0; i < valueLength; i++) {
      await this.inputPassword.addValue("\uE003");
    }
  }
}

module.exports = { Form };
