import React, { Component } from 'react';
import Layout from 'layouts/Main';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.theme.primary_brand};
  font-size: 50px;
`;

@Layout
export default class Todo extends Component {
  render() {
    return (
      <div>
        <Title>
          This is Todo
        </Title>
      </div>
    )
  }
}
