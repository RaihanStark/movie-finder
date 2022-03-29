import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";

function Search({ searchMovies, loading }) {
  const [inputMovie, setInputMovie] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [value] = useDebounce(inputMovie, 1000);

  useEffect(() => {
    if (value === "") return;
    searchMovies(value);
  }, [value]);

  const handleInputChange = (e) => {
    setInputMovie(e.target.value);
  };

  const handleInputOnFocus = (e) => {
    setIsFocused(true);
  };

  const handleInputOnBlur = (e) => {
    setIsFocused(false);
  };
  return (
    <>
      <FormControl
        value={inputMovie}
        onChange={handleInputChange}
        variant="standard"
        sx={{
          position: "relative",
          width: "100%",
          marginBottom: "1rem",
        }}
        size="normal"
        onFocus={handleInputOnFocus}
        onBlur={handleInputOnBlur}
        disabled={loading}
      >
        <InputLabel
          htmlFor="input-with-icon-adornment"
          sx={{
            paddingLeft: "3rem",
          }}
        >
          Search Movies and Series...
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          sx={{
            paddingLeft: "3rem",
            paddingBottom: "0.5rem",
            color: "black",
          }}
        />
        <SearchIcon
          sx={{
            position: "absolute",
            top: "1.25rem",
            left: "0.75rem",
            color: isFocused ? "primary.main" : "gray.light",
          }}
        />
      </FormControl>
    </>
  );
}

export default Search;
