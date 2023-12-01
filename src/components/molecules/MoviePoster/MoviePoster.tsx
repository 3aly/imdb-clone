import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Modal,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ImdbRating, RottenRating } from "../../atoms/index ";
import { useStyles } from "./MoviePoster.styles";
import { MoviePosterProps } from "../../../types";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useState } from "react";

export const MoviePoster = ({
  title,
  posterUrl,
  rating = 0,
  lang,
  date,
  overview,
}: MoviePosterProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    // setSelectedMovie(movie);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { classes } = useStyles();
  return (
    <>
      <Card className={classes.CardContainer}>
        <CardMedia
          className={classes.mediaContainer}
          image={`https://image.tmdb.org/t/p/w500${posterUrl}`}
          title={title}
        />
        <CardContent className={classes.cardContentContainer}>
          <Typography
            variant="subtitle1"
            component="div"
            color={"primary.light"}
          >
            {lang?.toUpperCase()}, {date?.substring(0, 4)}
          </Typography>

          <Typography
            variant="h6"
            component="div"
            className={classes.movieTitle}
          >
            {title}
          </Typography>
          <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
            <ImdbRating rating={rating} />
            <RottenRating rating={rating} />
          </Stack>
          <Box>
            <IconButton onClick={handleOpen}>
              <AddRoundedIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <Paper className={classes.paper}>
          <CardMedia
            className={classes.mediaContainer}
            image={`https://image.tmdb.org/t/p/w500${posterUrl}`}
            title={title}
          />
          <Grid container>
            <Grid item></Grid>
            <Grid item>
              <Typography variant="h5">{title}</Typography>
            </Grid>
            <Grid item>
              <p>{overview}</p>
            </Grid>
          </Grid>
        </Paper>
      </Modal>
    </>
  );
};
