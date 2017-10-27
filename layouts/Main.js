import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeProvider }  from 'styled-components';
import theme from 'theme';
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

export default function(ComposedComponent) {
  class Layout extends Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Header />

            <main>
              <ComposedComponent {...this.props}/>
            </main>

            <Footer />

          </Wrapper>
        </ThemeProvider>
      );
    }
  }

  return Layout;
}
