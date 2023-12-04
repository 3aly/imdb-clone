import { TextField, InputAdornment } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { quickStyles } from "../../../constants";
import { SearchBarProps } from "../../../types";
import { useStyles } from "./SearchBar.styles";

export const SearchBar = ({ title, setSearchTerm }: SearchBarProps) => {
  const { classes } = useStyles();

  return (
    <>
      <TextField
        className={classes.SearchBarStyle}
        label={title}
        InputLabelProps={{
          style: {
            // fontSize: 20,
            lineHeight: 1,
            // alignContent: "center",
            color: "white",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon
                color={"primary"}
                sx={quickStyles.responsiveIcons}
              />
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
