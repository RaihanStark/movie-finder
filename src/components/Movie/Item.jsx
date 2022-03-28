import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

function Item({ title, poster, type }) {
  return (
    <Box
      sx={{
        position: "relative",
        cursor: "pointer",
        transition: "all ease-in-out 0.3s",
        ":hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Box
        component="img"
        sx={{
          display: "block",
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
        src={poster}
        alt={title}
      />

      <Chip
        label={type.toUpperCase()}
        color={type === "movie" ? "error" : "secondary"}
        size="small"
        sx={{
          position: "absolute",
          top: "0.5rem",
          right: "0.5rem",
        }}
      />
      <Box
        sx={{
          width: "100%",
          color: "black",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          textAlign: "center",
        }}
      >
        <Typography
          component="h4"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}

export default Item;
