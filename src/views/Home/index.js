import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
//  import _ from "lodash";
//  import moment from "moment";

//  Layout
import {Layout} from "../../components";

//  API
import {} from "../../api";

//  Actions
import {} from "../../actions";

//  Assets

//  Styles
import styles from "./styles.scss";

const mapStateToProps = state => ({
  movies: state.movies.data
});
const mapDispatchToProps = dispatch => ({});

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onChangeTableValue = ({key = '', value}) => this.setState(state => ({
    ...state,
    table: {
      ...state.table,
      [key]: value,
    }
  }));

  render() {
    const {user} = this.props;
    const {} = this.state;

    return (
      <Layout {...this.props}>
        <section className={styles.home}>
          <main className={styles.body}>
            <h1>Body</h1>
          </main>
        </section>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
