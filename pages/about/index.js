import React, { Component } from 'react'
import Layout from 'layouts/Main'

@Layout
export default class extends React.Component {
  static async getInitialProps ({ query, res }) {
    return { name: query.name }
  }

  render () {
    const { name } = this.props

    return <h1>{name}</h1>
  }
}
