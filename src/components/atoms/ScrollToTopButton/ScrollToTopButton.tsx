import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { useStyles } from "./ScrollToTopButton.styles";
export const ScrollToTopButton = () => {
  const classes = useStyles();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return;

    () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <IconButton
      className={`${classes.classes.button} ${
        showButton && classes.classes.showButton
      }`}
      onClick={handleScrollToTop}
    >
      <KeyboardArrowUpRoundedIcon />
    </IconButton>
  );
};
