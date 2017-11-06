import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import configureStore from 'redux_flow/store';
import Head from 'next/head';
import Layout from 'layouts/Main';
import styled from 'styled-components';
import { Link } from 'routes';

const Title = styled.h1`
  color: ${props => props.theme.primary_brand};
  font-size: 50px;
`;


@withRedux(
  configureStore,
  state => ({
    todo: state.todo
  })
)
@Layout
export default class Home extends Component {
  render() {
    return (
      <div>
        <Title>
          <p>This is Home Page</p>
          <p>Todo length: {this.props.todo.length}</p>
        </Title>
        <Link route="about" params={{ name: 'Andy' }}>
          <button>Andy page</button>
        </Link>
      </div>
    )
  }
}
