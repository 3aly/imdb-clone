import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import { SearchBar } from "../../molecules/index ";
import { TvOutlined } from "@mui/icons-material";
import { Stack } from "@mui/material";
import DragHandleRoundedIcon from "@mui/icons-material/DragHandleRounded";
import { quickStyles } from "../../../constants";
import { NavBarProps } from "../../../types";
import { useState, MouseEvent, useEffect, useRef } from "react";
import { useStyles } from "./Nav.styles";

export default function NavBar({ setSearchTerm }: NavBarProps) {
  const navbarRef = useRef<HTMLDivElement>(null);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { classes } = useStyles();
  const mobileMenuId = "primary-search-account-menu-mobile";

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Typography variant="h5">Sign in</Typography>
      </MenuItem>
    </Menu>
  );

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

          <SearchBar
            title="What do you want to watch?"
            setSearchTerm={setSearchTerm}
          />
          <Stack direction="row" alignItems="center">
            <Box sx={quickStyles.hiddenSmall}>
              <Typography color={"primary"} variant="h5">
                Sign in
              </Typography>
            </Box>

            <Box sx={quickStyles.hiddenSmall}>
              <IconButton
                className={`${classes.menuIconContainer} ${
                  isScrolled && classes.iconScrolled
                }`}
                color={"primary"}
                size="large"
              >
                <DragHandleRoundedIcon sx={quickStyles.responsiveIcons} />
              </IconButton>
            </Box>
            <Box sx={quickStyles.hiddenBig}>
              <IconButton
                className={`${classes.menuIconContainer} ${
                  isScrolled && classes.iconScrolled
                }`}
                size="large"
                onClick={handleMobileMenuOpen}
                aria-controls={mobileMenuId}
                color={"primary"}
              >
                <MoreIcon sx={quickStyles.responsiveIcons} />
              </IconButton>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
