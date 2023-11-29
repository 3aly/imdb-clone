import * as React from "react";
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
import { useStyles } from "./Navbar.styles";
import DragHandleRoundedIcon from "@mui/icons-material/DragHandleRounded";
import { quickStyles } from "../../../constants";
type props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};
export default function NavBar({ setSearchTerm }: props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
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

  const { classes } = useStyles();
  return (
    <Box className="container">
      <AppBar className={classes.AppBarContainer}>
        <Toolbar className={classes.ToolbarContainer}>
          <Stack direction="row" alignItems="center">
            <IconButton
              size="large"
              color="primary"
              className={classes.LogoIconContainer}
            >
              <TvOutlined />
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
                className={classes.MenuIconContainer}
                color={"primary"}
              >
                <DragHandleRoundedIcon fontSize="large" />
              </IconButton>
            </Box>
            <Box sx={quickStyles.hiddenBig}>
              <IconButton
                className={classes.MenuIconContainer}
                onClick={handleMobileMenuOpen}
                aria-controls={mobileMenuId}
                color={"primary"}
              >
                <MoreIcon fontSize="large" />
              </IconButton>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
