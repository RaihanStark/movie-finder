import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

function BreadcrumbsComponent({ currentPath = "..." }) {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        marginBottom: "0.5rem",
      }}
    >
      <Link
        to="/"
        style={{ textDecoration: "none", color: "black", opacity: "0.6" }}
      >
        Dashboard
      </Link>
      <Typography color="text.primary">{currentPath}</Typography>
    </Breadcrumbs>
  );
}

export default BreadcrumbsComponent;
