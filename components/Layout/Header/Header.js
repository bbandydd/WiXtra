import React, { Component } from 'react';
import stylesheet from './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className="title">
          This is Header2
        </div>
      </div>
    );
  }
}
