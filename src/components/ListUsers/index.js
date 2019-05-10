import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as usuariosActions } from "../../store/ducks/usuarios";

import { Table } from "./styles";

class ListUsers extends Component {
  state = {
    usuarios: []
  };

  componentDidMount() {
    this.props.listRequest();
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <td>Usuário</td>
            <td>E-mail</td>
            <td>Data criação</td>
          </tr>
        </thead>
        <tbody>
          {this.props.listUsers.map(item => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.email}</td>
              <td>{item.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  listUsers: state.usuarios.users
});

const mapDispatchToProps = dispach =>
  bindActionCreators(usuariosActions, dispach);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUsers);
