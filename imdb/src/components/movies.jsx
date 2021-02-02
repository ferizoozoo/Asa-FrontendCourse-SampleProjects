import React, { Component } from "react";
import FilterList from "../common/filterList";
import Loading from "../common/loading";
import Pagination from "../common/pagination";
import { getMovies, getGenreList } from "../services/fakeService";

class Movies extends Component {
  state = {
    movies: [],
    genreList: [],
    selectedGenere: { id: 0 },
    selectedMovie: 1
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: getMovies(),
        genreList: getGenreList(),
      });
    }, 1500);
  }

  render() {
    const { movies, genreList, selectedGenere, selectedMovie } = this.state;

    const filteredList =
      selectedGenere && selectedGenere.name
        ? movies.filter((x) => x.genre === selectedGenere.name)
        : movies;
    const movieCount = filteredList.length;

    return (
      <div class="row m-2">
        <div className="col-3">
          <FilterList
            items={genreList}
            keyField="id"
            valueField="name"
            selectedItem={selectedGenere}
            onSelect={(item) => {
              this.setState({
                selectedGenere: item,
              });
            }}
          />
        </div>
        <div className="col">
          {movies.length > 0 ? (
            <>
              <h3>There are {movieCount} movies</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredList.map((movie, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{movie.title}</td>
                      <td>{movie.genre}</td>
                      <td>{movie.inStock}</td>
                      <td>{movie.rate}</td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination totalItems={filteredList.length} itemPerPage={1}/>
            </>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    );
  }
}

export default Movies;
