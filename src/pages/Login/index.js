import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as LoginActions } from "../../store/ducks/login";

import { isAuthenticated } from "../../services/auth";

import Logo from "../../assets/logo.svg";
import { Form, Container } from "./styles";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { history } = this.props;

    if (!email || !password) {
      this.props.loginFailure("Preencha e-mail e senha para continuar!");
    } else {
      const user = { email, password };
      this.props.loginAttempt(user, history);
    }
  };

  componentDidMount() {
    if (isAuthenticated()) {
      this.props.history.push("/app");
    }
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <h2>Cloudcom</h2>
          <h2>PromptMode</h2>
          <img src={Logo} alt="logo promptmode" />
          {this.props.error && <p>{this.props.error}</p>}
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Entrar</button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.login.error
});

const mapDispatchToProps = dispach => bindActionCreators(LoginActions, dispach);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
