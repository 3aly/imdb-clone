import React, { SetStateAction } from "react";

// import styles from "./searchbar.css";
import { TextField, InputAdornment } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
type SearchBarProps = {
  title?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setSearchTerm: Function;
};

export const SearchBar = ({ title, setSearchTerm }: SearchBarProps) => {
  return (
    <>
      <TextField
        fullWidth
        label={title}
        id="fullWidth"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </>
  );
};
