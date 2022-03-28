import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "#3F4459",
          boxShadow: "none",
          borderBottom: "1px solid #E5E5E5",
          marginBottom: "1rem",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Movie Finder
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
