import React, { Component } from 'react';
import { Link } from 'routes';
import styled from 'styled-components';

const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  padding: 15px;
  height: 40px;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  background: #387EF5;
  position: absolute;
  top: 0;
  width: 100%;
  a {
    padding: 0 15px;
    color: #FFF;
  }
`;

const Logo = styled.img`
  width: 50px;
`;

export default class Header extends Component {
  render() {
    return (
      <HeaderTag>
        <Logo src="/static/images/logo.png" alt="" />
        <Link href='/' prefetch><a>Home</a></Link> |
        <Link href='/todo' prefetch><a>todo</a></Link> |
      </HeaderTag>
    )
  }
};
