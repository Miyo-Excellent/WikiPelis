//  Dependencies
import React, {Component} from 'react';
import {connect} from 'react-redux';
//  import _ from 'lodash';
//  import moment from 'moment';
//  import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//  import {faBars} from '@fortawesome/free-solid-svg-icons';

//  API
import {} from "../../api";

//  Components
import {Header} from "../index";

//  Actions
import {} from '../../actions';

//  Styles
import styles from './styles.scss';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {children} = this.props;
    const {} = this.state;

    return (
      <div className={styles.container}>
        <Header />

        <div className={styles.wrapper}>
          {children}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
