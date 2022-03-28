import { useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";

import MovieSearch from "../../components/Movie/Search/Search";
import MovieItem from "../../components/Movie/Item";
import { searchMoviesByTitle } from "../../lib/movies";
import { Link } from "react-router-dom";

function Dashboard() {
  // Movies
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({});
  const [valueDebounce, setValueDebounce] = useState("");

  const fetchPage = (page) => {
    setLoading(true);
    searchMoviesByTitle(valueDebounce, page).then((data) => {
      console.log(data);
      setMovies(data);
      setLoading(false);
    });
  };

  const searchMovies = async (value) => {
    console.log("fetch", value);
    setLoading(true);
    const data = await searchMoviesByTitle(value, 1);
    console.log(data);
    setMovies(data);
    setLoading(false);
    setValueDebounce(value);
  };

  const handlePaginationChange = (e, page) => {
    fetchPage(page);
  };

  const renderMovies = () => {
    if (movies.Response === "True") {
      return movies.Search.map((movie) => {
        return (
          <Grid item md={3} lg={2} key={movie.imdbID}>
            <Link to={`/detail/${movie.imdbID}`}>
              <MovieItem
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
              />
            </Link>
          </Grid>
        );
      });
    }
  };

  const renderPagination = () => {
    if (movies.Response === "False") return;
    if (Object.keys(movies).length === 0) return null;
    return (
      <>
        <Pagination
          sx={{
            marginTop: "1rem",
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
          count={movies.Paging.totalPages}
          onChange={handlePaginationChange}
          color="primary"
        />
      </>
    );
  };
  return (
    <>
      <MovieSearch searchMovies={searchMovies} />
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
    </>
  );
}

export default Dashboard;
