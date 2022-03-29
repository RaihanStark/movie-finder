import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";

import MovieEmpty from "../../components/Movie/Empty";
import MovieSearch from "../../components/Movie/Search";
import MovieItem from "../../components/Movie/Item";
import { searchMoviesByTitle } from "../../lib/movies";

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
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            lg={2}
            key={movie.imdbID}
            sx={{
              height: "100%",
            }}
          >
            <Link
              to={`/detail/${movie.imdbID}`}
              style={{ textDecoration: "none" }}
            >
              <MovieItem
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                type={movie.Type}
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

  const renderContent = () => {
    if (loading) return <h1>Loading...</h1>;
    if (Object.keys(movies).length === 0) return <MovieEmpty />;
    if (movies.Response === "False") return <MovieEmpty error={movies.Error} />;
    return renderMovies();
  };
  return (
    <>
      <MovieSearch searchMovies={searchMovies} loading={loading} />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {renderContent()}
      </Grid>
      {renderPagination()}
    </>
  );
}

export default Dashboard;
