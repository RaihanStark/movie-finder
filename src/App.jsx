import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import TextField from "@mui/material/TextField";
import { searchMoviesByTitle } from "./lib/movies";
import GlobalStyles from "@mui/material/GlobalStyles";
import Grid from "@mui/material/Grid";

import MovieItem from "../src/components/Movie/Item";

function App() {
  // Input
  const [inputMovie, setInputMovie] = useState("");
  const [value] = useDebounce(inputMovie, 1000);

  // Movies
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (value !== "") {
      console.log("fetch", value);
      setLoading(true);
      searchMoviesByTitle(value, 1).then((data) => {
        console.log(data);
        setMovies(data);
        setLoading(false);
      });
    }
  }, [value]);

  const fetchNextPage = () => {
    const nextPage = movies.Paging.nextPage;
    if (nextPage === null) return;

    setLoading(true);
    searchMoviesByTitle(value, nextPage).then((data) => {
      setMovies(data);
      setLoading(false);
    });
  };

  const fetchPrevPage = () => {
    const prevPage = movies.Paging.prevPage;
    if (prevPage === null) return;

    setLoading(true);
    searchMoviesByTitle(value, prevPage).then((data) => {
      setMovies(data);
      setLoading(false);
    });
  };

  const handleInputChange = (e) => {
    setInputMovie(e.target.value);
  };

  const renderMovies = () => {
    if (movies.Response === "True") {
      return movies.Search.map((movie) => {
        return (
          <Grid item md={3} lg={2}>
            <MovieItem
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
            />
          </Grid>
        );
      });
    }
  };

  const renderPagination = () => {
    if (movies.Response === "True") {
      return (
        <>
          {movies.Paging.prevPage ? (
            <button onClick={fetchPrevPage}>
              Previous Page: {movies.Paging.prevPage}
            </button>
          ) : null}

          <button>Current Page: {movies.Paging.currentPage}</button>

          {movies.Paging.nextPage ? (
            <button onClick={fetchNextPage}>
              Next Page: {movies.Paging.nextPage}
            </button>
          ) : null}

          {movies.Paging.totalPages !== movies.Paging.currentPage ? (
            <button>Last Page: {movies.Paging.totalPages}</button>
          ) : null}
        </>
      );
    }
  };

  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            fontFamily: "Roboto, sans-serif",
          },
        }}
      />
      <div className="App">
        <div id="searchMovie">
          <TextField
            id="outlined-basic"
            label="Search for Movies & TV Series"
            size="small"
            variant="filled"
            value={inputMovie}
            disabled={loading}
            onChange={handleInputChange}
          />
        </div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {renderMovies()}
        </Grid>
        {renderPagination()}
      </div>
    </>
  );
}

export default App;
