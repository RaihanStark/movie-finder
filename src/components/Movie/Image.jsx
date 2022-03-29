import Box from "@mui/material/Box";

function Image({
  poster,
  title,
  sx = {
    width: "100%",
    height: "300px",
  },
}) {
  return (
    <Box
      component="img"
      sx={{
        display: "block",
        objectFit: "cover",
        ...sx,
        "@media (max-width: 598.98px)": {
          height: "auto",
        },
      }}
      src={
        poster === "N/A"
          ? "https://cinemaone.net/images/movie_placeholder.png"
          : poster
      }
      alt={title}
    />
  );
}

export default Image;
