import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: pink;
  font-size: 50px;
`;

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Title>
          This is Footer
        </Title>
      </div>
    );
  }
}
