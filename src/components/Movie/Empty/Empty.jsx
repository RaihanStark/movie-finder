import React from "react";
import MovieIcon from "@mui/icons-material/Movie";
import Box from "@mui/material/Box";

function Empty({ error = "" }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        marginTop: "2.5rem",
        marginLeft: "1rem",
        marginRight: "1rem",
      }}
    >
      <MovieIcon sx={{ fontSize: "10rem" }} />
      <h1>{error === "" ? "Find your Movies or TV Series" : error}</h1>
      <p style={{ margin: 0 }}>
        Please type on the search box to find the movies or series
      </p>
    </Box>
  );
}

export default Empty;
