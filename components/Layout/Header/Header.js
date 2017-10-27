import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: pink;
  font-size: 50px;
`;

export default class Header extends Component {
  render() {
    return (
      <div>
        <Title>
          This is Header
        </Title>
      </div>
    );
  }
}
