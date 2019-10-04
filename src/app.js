// Dependencies
import '@babel/polyfill';
import React, { Component } from 'react';
import {Provider} from 'react-redux';

// Store
import store from './store';

// Action
import { movies } from './actions';

//  Routes
import Routes from './Routes';

//  Styles
import './styles/_global.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  async componentDidMount() {
    const { dispatch } = store;

    await movies.onChangeMovieFetchStatus({dispatch, status: true});
    await movies.onChangeMovieData({dispatch, data: []});
    await movies.onChangeMovieFetchStatus({dispatch, status: false});
  }

  render() {
    const {} = this.props;
    const {} = this.state;

    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
  }
}

export default <App />;
