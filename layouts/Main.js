import React, { Component } from 'react';
import { Provider } from "react-redux";
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import configureStore from 'redux_flow/store';
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

const store = configureStore();

export default function(ComposedComponent) {
  class Layout extends Component {
    render() {
      return (
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Wrapper>
              <Header />

              <main>
                <ComposedComponent {...this.props}/>
              </main>

              <Footer />

            </Wrapper>
          </ThemeProvider>
        </Provider>
      );
    }
  }

  return Layout;
}
