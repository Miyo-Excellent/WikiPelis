import React, {Component, createRef} from 'react';
import {connect} from 'react-redux';
//  import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//  import {faSearch} from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";
//  import moment from "moment";
import {Button, Header, Image, Modal, Dimmer, Loader} from 'semantic-ui-react'

//  Layout
import {Layout} from "../../components";

//  API
import {getMovies} from "../../api";

//  Actions
import {} from "../../actions";

//  Assets

//  Styles
import styles from "./styles.scss";

const Loading = () => (
  <Dimmer active>
    <Loader size='large'>Loading</Loader>
  </Dimmer>
);

const mapStateToProps = state => ({
  movies: state.movies.data,
  isFetchMovies: state.movies.isFetching,
});

const mapDispatchToProps = dispatch => ({});

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMovie: {}
    };

    this.main = createRef();
  }

  onChangeTableValue = ({key = '', value}) => this.setState(state => ({
    ...state,
    table: {
      ...state.table,
      [key]: value,
    }
  }));

  render() {
    const {movies = [], isFetchMovies} = this.props;
    const {currentMovie} = this.state;

    return (
      <Layout {...this.props}>
        <main
          className={styles.home}
          ref={this.main}
          style={{height: this.main.current ? this.main.current.clientHeight : ''}}
        >
          {!isFetchMovies && movies.map(({Poster, Title, Type, imdbID}, key) => (
            <div key={`main-movie:${key}`} className={`ui card ${styles['movie-card']}`}>
              <div className={`image ${styles['container-cover']}`}>
                <img src={Poster} alt={Title} className={styles.cover}/>
              </div>

              <div className="content">
                <div className="header">{Title}</div>

                <div className="meta">{`Type: ${Type}`}</div>
              </div>

              <div className="extra content">
                <Modal
                  trigger={<Button>More Info</Button>}
                  onOpen={async _event_ => {
                    const {data} = await getMovies({id: imdbID});
                    await this.setState(state => ({...state, currentMovie: data}));
                  }}
                  onClose={() => this.setState(state => ({
                    ...state,
                    currentMovie: {
                      currentMovie: {}
                    }
                  }))}
                  centered={false}
                >
                  <Modal.Header>{Title}</Modal.Header>

                  <Modal.Content image>
                    {!_.isEmpty(currentMovie) && (
                      <>
                        <Image wrapped size='medium' src={Poster}/>

                        <Modal.Description>
                          <Header>{Title}</Header>

                          <hr/>

                          <p>{`Plot: ${currentMovie.Plot}`}</p>

                          <hr/>

                          <p>{`Awards: ${currentMovie.Awards}`}</p>

                          <hr/>

                          <p>{`Actors: ${currentMovie.Actors}`}</p>

                          <hr/>

                          <p>{`Production: ${currentMovie.Production}`}</p>

                          <hr/>

                          <p>{`Year: ${currentMovie.Year}`}</p>

                          <hr/>
                        </Modal.Description>
                      </>
                    )}

                    {_.isEmpty(currentMovie) && (<Loading/>)}
                  </Modal.Content>
                </Modal>
              </div>
            </div>
          ))}

          {isFetchMovies && (<Loading />)}

          {_.isEmpty(movies) && (
            <h1>Please Search A Movies</h1>
          )}
        </main>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
