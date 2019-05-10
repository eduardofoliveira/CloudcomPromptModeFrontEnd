import React, { Component } from "react";
import { Route, Switch /*Redirect*/ } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import UserIcon from "../../assets/user.svg";
import { Container, Header } from "./styles";

import ListUsers from "../../components/ListUsers";

class App extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Header>
          <a href="/app">
            <img src={Logo} alt="Cloud Prompt Mode" />
          </a>

          <h2>Cloud - PromptMode</h2>

          <a href="/app/users">
            <img src={UserIcon} alt="Usuários" />
          </a>
        </Header>
        <Switch>
          <Route exact path="/app/users" component={ListUsers} />
        </Switch>
      </Container>
    );
  }
}

export default App;
