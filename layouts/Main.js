import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import Header from './Header';
import Footer from './Footer';

import 'glamor/reset';
import 'styles/global-styles';

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
`;

const Main = styled.main`
  padding: 40px 0;
`;

export default function(WrappedComponent) {
  class Layout extends Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Header />

            <Main>
              <WrappedComponent {...this.props}/>
            </Main>

            <Footer />

          </Wrapper>
        </ThemeProvider>
      );
    }
  }

  Layout.getInitialProps = WrappedComponent.getInitialProps;

  return Layout;
}
