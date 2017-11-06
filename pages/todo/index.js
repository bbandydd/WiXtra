import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import configureStore from 'redux_flow/store';
import { todoActions } from 'redux_flow/actions';
import Layout from 'layouts/Main';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.theme.primary_brand};
  font-size: 50px;
`;

@withRedux(
  configureStore,
  state => ({
    todo: state.todo
  }),
  {
    ...todoActions
  }
)
@Layout
export default class Todo extends Component {
  static async getInitialProps() {;
    const url = 'https://raw.githubusercontent.com/bbandydd/React_Redux_Todolist/gh-pages/initial.json';
    const data = await fetch(url).then(res => res.json());
    return { data };
  }

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
    const { todo, data } = this.props;

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
        <div>
          {JSON.stringify(this.props.data)}
        </div>
      </div>
    )
  }
}
