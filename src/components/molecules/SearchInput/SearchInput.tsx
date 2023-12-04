import { TextField, InputAdornment } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { quickStyles } from "../../../constants";
import { SearchBarProps } from "../../../types";
import { useStyles } from "./SearchInput.styles";

export const SearchInput = ({ title, setSearchTerm }: SearchBarProps) => {
  const { classes } = useStyles();

  return (
    <>
      <TextField
        className={classes.SearchBarStyle}
        label={title}
        InputLabelProps={{
          style: {
            lineHeight: 1,
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
