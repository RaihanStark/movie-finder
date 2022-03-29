import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import MovieImage from "./Image";
import Divider from "@mui/material/Divider";

import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function Detail({ data }) {
  const renderCategory = () => {
    return data.Genre.split(", ").map((genre) => {
      return (
        <Chip
          key={genre}
          label={genre}
          size="small"
          sx={{ marginRight: "0.5rem" }}
        />
      );
    });
  };

  return (
    <Grid container sx={{ display: "flex" }}>
      <Grid
        item
        sx={{
          width: "100%",
        }}
        sm={6}
        md={4}
      >
        <MovieImage
          poster={data.Poster}
          title={data.Title}
          sx={{
            width: "100%",
          }}
        />
      </Grid>

      <Grid
        item
        sm={6}
        md={8}
        sx={{
          padding: "0.5rem 1rem",
        }}
      >
        <h2
          style={{
            margin: 0,
          }}
        >
          {data.Title} ({data.Year})
        </h2>
        <Box
          sx={{
            marginTop: "0.5rem",
          }}
        >
          {renderCategory()}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "0.5rem",
            fontWeight: 500,
            marginTop: "0.85rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              color: "gray.light",
            }}
          >
            <WatchLaterIcon fontSize="small" /> {data.Runtime}
          </Box>
          {data.totalSeasons ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                color: "gray.light",
              }}
            >
              <CameraRollIcon fontSize="small" /> {data.totalSeasons} Seasons
            </Box>
          ) : null}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            <img
              width="25"
              alt="imdb logo"
              src="data:image/png;base64,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"
            />{" "}
            {data.imdbRating} ({data.imdbVotes} votes)
          </Box>
        </Box>
        <p>{data.Plot}</p>
        <Box>
          <b>Director:</b> {data.Director}
        </Box>
        <Box>
          <b>Writer:</b> {data.Writer}
        </Box>
        <Box>
          <b>Actors:</b> {data.Actors}
        </Box>

        <Divider
          sx={{
            margin: "1rem 0",
          }}
        />

        {data.Ratings.length > 0 && (
          <h2
            style={{
              margin: 0,
            }}
          >
            Ratings
          </h2>
        )}

        <List>
          {data.Ratings.map((rating, i) => {
            return (
              <ListItem key={i} disablePadding>
                <ListItemText primary={rating.Source} />
                <Chip label={rating.Value} size="small" color="secondary" />
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
}

export default Detail;
