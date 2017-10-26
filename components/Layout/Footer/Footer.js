import React, { Component } from 'react';
import stylesheet from './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="title">
          This is Footer
        </div>
      </div>
    );
  }
}
