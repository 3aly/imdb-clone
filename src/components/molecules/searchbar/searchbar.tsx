// import styles from "./searchbar.css";
import { TextField, InputAdornment, Box } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useStyles } from "./Searchbar.styles";
import { Dispatch, SetStateAction } from "react";
type SearchBarProps = {
  title?: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export const SearchBar = ({ title, setSearchTerm }: SearchBarProps) => {
  const { classes } = useStyles();

  return (
    <>
      <TextField
        fullWidth
        className={classes.SearchBarStyle}
        label={title}
        InputLabelProps={{
          style: {
            color: "white",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <SearchOutlinedIcon color={"primary"} fontSize="large" />
              </Box>
            </InputAdornment>
          ),
        }}
        onChange={(e: { target: { value: string } }) => {
          setSearchTerm(e.target.value);
        }}
      />
    </>
  );
};
