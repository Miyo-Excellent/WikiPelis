import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
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
    };
  }

  render() {
    const {movies, changeMoviesData, changeMoviesFetchStatus} = this.props;
    const {search, type} = this.state;

    return (
      <header className={styles.header}>
        <div className={styles.title}>
          <h1 className={styles.text}>Wiki Pelis</h1>
        </div>

        <div className={styles.search}>
          <button
            className={styles.btn}
            onClick={async e => {
              if (search.length > 3) {
                const { data } = await getMovies({search, type});

                await this.setState(state => ({...state, search: ''}));
                changeMoviesFetchStatus(true);
                changeMoviesData(data.Search);
                changeMoviesFetchStatus(false);
              }
            }}
          >
            <FontAwesomeIcon icon={faSearch} className={styles.icon}/>
          </button>

          <input
            type="text"
            className={styles.input}
            placeholder="Buscar..."
            value={search}
            onChange={e => {
              const search = e.target.value;

              this.setState(state => ({...state, search}));
            }}
          />
        </div>
      </header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
