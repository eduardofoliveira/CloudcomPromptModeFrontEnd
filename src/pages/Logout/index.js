import { Component } from "react";

import { logout } from "../../services/auth";

class Logout extends Component {
  state = {};

  render() {
    logout();
    this.props.history.push("/");
    return "";
  }
}

export default Logout;
