import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMoviesById } from "../../lib/movies";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import MovieDetail from "../../components/Movie/Detail";
function Detail() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMoviesById(imdbID).then((data) => {
      console.log(data);
      setMovie(data);
      setLoading(false);
    });
  }, []);

  const renderDetail = () => {
    if (Object.keys(movie).length === 0) return null;

    return <MovieDetail data={movie} />;
  };

  const renderLoading = () => {
    return <h1>Loading ...</h1>;
  };
  return (
    <>
      <Breadcrumbs currentPath={movie.Title} />
      {loading ? renderLoading() : renderDetail()}
    </>
  );
}

export default Detail;
