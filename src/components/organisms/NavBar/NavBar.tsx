import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { SearchInput } from "../../molecules/index ";
import { TvOutlined } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { quickStyles } from "../../../constants";
import { NavBarProps, StoreType } from "../../../types";
import { useStyles } from "./Navbar.styles";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../store/themeReducer";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";

export default function NavBar({ setSearchTerm }: NavBarProps) {
  const navbarRef = useRef<HTMLDivElement>(null);
  const { darkMode } = useSelector((state: StoreType) => state.theme);
  const dispatch = useDispatch();

  const [isScrolled, setIsScrolled] = useState(false);

  const { classes } = useStyles();
  const mobileMenuId = "primary-search-account-menu-mobile";

  useEffect(() => {
    const handleScroll = () => {
      const navBarHeight = navbarRef?.current?.offsetHeight ?? 0;
      if (window.scrollY > navBarHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return;
  }, []);

  return (
    <Box className="container" ref={navbarRef}>
      <AppBar
        className={`${classes.appBar} ${isScrolled && classes.appBarScrolled}`}
      >
        <Toolbar className={classes.toolbarContainer}>
          <Stack direction="row" alignItems="center">
            <IconButton
              size="large"
              className={`${classes.logoIconContainer} ${
                isScrolled && classes.iconScrolled
              }`}
            >
              <TvOutlined sx={quickStyles.responsiveIcons} />
            </IconButton>
            <Box sx={quickStyles.hiddenSmall}>
              <Typography variant="h6" color={"primary"} component="div">
                MovieBox
              </Typography>
            </Box>
          </Stack>

          <SearchInput
            title="What do you want to watch?"
            setSearchTerm={setSearchTerm}
          />
          <Stack direction="row" alignItems="center">
            <Box sx={quickStyles.hiddenSmall}>
              <Typography color={"primary"} variant="h5">
                Sign in
              </Typography>
            </Box>

            <Box>
              <IconButton
                className={`${classes.menuIconContainer} ${
                  isScrolled && classes.iconScrolled
                }`}
                size="large"
                onClick={() => dispatch(toggleTheme())}
                aria-controls={mobileMenuId}
                color={"primary"}
              >
                {darkMode ? (
                  <>
                    <WbSunnyOutlinedIcon sx={quickStyles.responsiveIcons} />
                  </>
                ) : (
                  <>
                    <BedtimeOutlinedIcon sx={quickStyles.responsiveIcons} />
                  </>
                )}
              </IconButton>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
