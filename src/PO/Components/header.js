const { $ } = require("@wdio/globals");

class Header {
  get AdminLogo() {
    return $(".app_logo");
  }
}

module.exports = { Header };
