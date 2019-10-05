import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Checkbox} from 'semantic-ui-react'

//  import _ from "lodash";
//  import moment from "moment";

//  Layout
import {Layout} from "../../components";

//  API
import {getMovies} from "../../api";

//  Actions
import {movies} from "../../actions";

//  Assets
import logo from "../../assets/images/logo_colegio.png";

//  Styles
import styles from "./styles.scss";

const Search = ({onChange, value, onSearch, placeholder = ''}) => (
  <div className={styles.search}>
    <button className={styles.btn} onClick={onSearch}>
      <FontAwesomeIcon icon={faSearch} className={styles.icon}/>
    </button>

    <input
      type="text"
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

const mapStateToProps = state => ({movies: state.movies.data});

const mapDispatchToProps = dispatch => ({
  changeMoviesData(data) {
    movies.onChangeMovieData({dispatch, data});
  },
  changeMoviesFetchStatus(status) {
    movies.onChangeMovieFetchStatus({dispatch, status});
  }
});

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      type: '', //  '' || 'movie' || 'series' || 'episode',
      types: [
        {label: 'movie'},
        {label: 'series'},
        {label: 'episode'},
      ]
    };
  }

  search = async e => {
    const {search, type} = this.state;
    const {changeMoviesData, changeMoviesFetchStatus} = this.props;

    if (search.length > 3) {
      const {data} = await getMovies({search, type});

      await this.setState(state => ({...state, search: ''}));
      changeMoviesFetchStatus(true);
      changeMoviesData(data.Search);
      changeMoviesFetchStatus(false);
    }
  };

  render() {
    const {types, type} = this.state;

    return (
      <header className={styles.header}>
        <div className={styles.title}>
          <h1 className={styles.text}>Wiki Pelis</h1>
        </div>

        <Search
          placeholder='Buscar...'
          value={this.state.search}
          onSearch={this.search}
          onChange={e => {
            const search = e.target.value;

            this.setState(state => ({...state, search}));
          }}
        />

        <div className={styles['select-type']}>
          {types.map(({label}, key) => (
            <div
              key={`header-select-type:${key}`}
              className={`ui fitted toggle checkbox ${styles.type}`}
              onClick={e => this.setState(state => ({
                ...state,
                type: label !== type ? label : ''
              }))}
            >
              <span className={styles.label}>{label}</span>
              <input
                type="checkbox"
                className="hidden"
                readOnly
                checked={label === type}
              />
              <label/>
            </div>
          ))}
        </div>
      </header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
