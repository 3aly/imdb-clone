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
        color="primary"
        style={{ width: "40%", marginTop: 2, height: "" }}
        sx={{
          input: { color: "white" },
          borderWidth: 2,
          borderRadius: 3,
          borderStyle: "solid",

          borderColor: "primary.main",
        }}
        InputLabelProps={{
          style: {
            fontFamily: "DM Sans",
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: 400,
            // lineHeight: 24,
            // borderColor: "white",
            color: "white",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon color={"primary"} />
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
