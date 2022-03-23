import React from "react";
import Box from "@mui/material/Box";

function Item({ title, poster }) {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        component="img"
        sx={{ display: "block", width: "100%" }}
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
