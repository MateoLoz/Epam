const { $ } = require("@wdio/globals");

const Page = require("./pages");
const { Form } = require("../Components/form");
const { Header } = require("../Components/header");

class LoginPage extends Page {
  form = new Form();
  header = new Header();

  get errorMessage() {
    return $("//h3[@data-test='error']");
  }

  open() {
    return super.open("https://www.saucedemo.com/");
  }
}

module.exports = new LoginPage();
