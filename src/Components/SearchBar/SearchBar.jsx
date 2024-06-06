// src/components/SearchBar.js
import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <TextField
      label="Search Products"
      variant="outlined"
      fullWidth
      margin="normal"
      onChange={handleChange}
    />
  );
};

export default SearchBar;
