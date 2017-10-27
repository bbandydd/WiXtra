import React, { Component } from 'react';
import Head from 'next/head';
import { App } from '../components';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.theme.primary_brand};
  font-size: 50px;
`;

@App
export default class Home extends Component {
  render() {
    return (
      <div>
        <Title>
          This is Home Pag2e2
        </Title>
      </div>
    )
  }
}
