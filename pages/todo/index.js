import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todoActions } from 'redux_flow/actions';
import Layout from 'layouts/Main';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.theme.primary_brand};
  font-size: 50px;
`;

@Layout
@connect(
  state => ({
    todo: state.todo
  }), {
    ...todoActions
  }
)
export default class Todo extends Component {
  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  addTodo = () => {
    this.props.addTodo({
      text: this.state.text
    });

    this.setState({
      text: ''
    });
  }

  render() {
    const { text } = this.state;
    const { todo } = this.props;

    return (
      <div>
        <Title>
          This is Todo
        </Title>
        <div>
          <input type="text" onChange={this.handleChange} value={text}/>
          <button onClick={this.addTodo}>add</button>
        </div>
        <div>
          {
            todo.map(item => <p>{item.text}</p>)
          }
        </div>
      </div>
    )
  }
}
