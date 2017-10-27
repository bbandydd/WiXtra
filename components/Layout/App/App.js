import React, { Component } from 'react';
import { ThemeProvider }  from 'styled-components';
import theme from '../../../theme';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function(ComposedComponent) {
  class App extends Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <div>
            <Header />
            <ComposedComponent {...this.props}/>
            <Footer />
          </div>
        </ThemeProvider>
      );
    }
  }

  return App;
}
