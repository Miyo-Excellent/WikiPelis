//  Dependencies
import React, {Component} from 'react';

//  Layout
import {Layout} from "../../components";

export default class Page404 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Layout {...this.props}>
        <h1>Page 404</h1>
      </Layout>
    );
  }
}
