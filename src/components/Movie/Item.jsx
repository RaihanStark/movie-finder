import React from "react";
import Box from "@mui/material/Box";

function Item({ title, poster }) {
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
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          color: "white",
          backdropFilter: "blur(10px)",
        }}
      >
        <h3>{title}</h3>
      </Box>
    </Box>
  );
}

export default Item;
