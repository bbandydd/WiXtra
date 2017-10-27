import React, { Component } from 'react';
import styled from 'styled-components'

const FooterTag = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #333;
  color: #fff;
  height: 40px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterTag>
        &#9400; WiXtra
      </FooterTag>
    )
  }
};
