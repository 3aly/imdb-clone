import React from "react";

import styles from "./searchbar.css";
import {
  BottomNavigation,
  BottomNavigationAction,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter, YouTube } from "@mui/icons-material";

export interface FooterProps {
  prop?: string;
}

export default function Footer({ prop = "default value" }: FooterProps) {
  const handleLinkClick = (url: string) => {
    // Open the link in a new tab/window
    window.open(url, "_blank");
  };
  return (
    <footer>
      {/* <Stack
        alignContent={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        // px={4}
        sx={{ backgroundColor: "red" }}
      > */}
      <BottomNavigation showLabels>
        <BottomNavigationAction
          icon={<GitHub />}
          onClick={() => handleLinkClick("https://github.com/3aly")}
        />
        <BottomNavigationAction
          icon={<LinkedIn />}
          onClick={() => handleLinkClick("https://linkedin.com")}
        />
        <BottomNavigationAction
          icon={<YouTube />}
          onClick={() => handleLinkClick("https://YouTube.com/")}
        />
      </BottomNavigation>

      <Stack
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        m={"3%"}
        mx={"30%"}
      >
        <Link href="#" color="secondary.light" underline="none">
          <Typography variant="caption">Conditions of Use</Typography>
        </Link>
        <Link href="#" color="secondary.light" underline="none">
          <Typography variant="caption">Privacy & Policy</Typography>
        </Link>
        <Link href="#" color="secondary.light" underline="none">
          <Typography variant="caption">Press Room</Typography>
        </Link>
      </Stack>
      <BottomNavigation showLabels>
        <Typography variant="caption" align="center" color={"primary.text"}>
          © 2023 MovieBox by Ali Hefny
        </Typography>
      </BottomNavigation>
      {/* </Stack> */}
    </footer>
  );
}
