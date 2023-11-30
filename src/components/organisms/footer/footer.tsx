import { IconButton, Box, Link, Typography } from "@mui/material";
import { GitHub, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import { useStyles } from "./Footer.styles";
import { handleLinkClick } from "../../../utils/utils";

export default function Footer() {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.iconsContainer}>
        <IconButton
          color="secondary"
          onClick={() => handleLinkClick("https://github.com/3aly")}
        >
          <GitHub />
        </IconButton>

        <IconButton
          color="secondary"
          onClick={() =>
            handleLinkClick("https://linkedin.com/in/ali-hefny-b8087723a")
          }
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          color="secondary"
          onClick={() =>
            handleLinkClick("https://www.instagram.com/3aly_7efny/")
          }
        >
          <Instagram />
        </IconButton>
        <IconButton
          color="secondary"
          onClick={() =>
            handleLinkClick(
              "https://www.youtube.com/channel/UCriuGOGkWvjSNUVKFuF0tKA"
            )
          }
        >
          <YouTube />
        </IconButton>
      </Box>
      <Box className={classes.linksContainer}>
        <Link href="#" color="secondary.light" underline="none">
          <Typography variant="h3" color={"primary.grey"}>
            Conditions of Use
          </Typography>
        </Link>
        <Link href="#" color="secondary.light" underline="none">
          <Typography variant="h3" color={"primary.grey"}>
            Privacy & Policy
          </Typography>
        </Link>
        <Link href="#" color="secondary.light" underline="none">
          <Typography variant="h3" color={"primary.grey"}>
            Press Room
          </Typography>
        </Link>
      </Box>

      <Box>
        <Typography variant="h3" align="center" color={"primary.text"}>
          © 2023 MovieBox by Ali Hefny
        </Typography>
      </Box>
    </Box>
  );
}
