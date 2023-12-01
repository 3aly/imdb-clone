import { TextField, InputAdornment, Box } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useStyles } from "./Searchbar.styles";
import { quickStyles } from "../../../constants";
import { SearchBarProps } from "../../../types";

export const SearchBar = ({ title, setSearchTerm }: SearchBarProps) => {
  const { classes } = useStyles();

  return (
    <>
      <TextField
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
              <Box sx={quickStyles.hiddenSmall}>
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
