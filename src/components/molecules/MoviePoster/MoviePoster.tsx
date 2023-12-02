import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ImdbRating, MovieModal, RottenRating } from "../../atoms/index ";
import { useStyles } from "./MoviePoster.styles";
import { MoviePosterProps } from "../../../types";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

export const MoviePoster = ({
  title,
  posterUrl,
  rating = 0,
  lang,
  date,
  overview,
  genres,
}: MoviePosterProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const { classes } = useStyles();
  return (
    <>
      <Card className={classes.cardContainer}>
        <CardMedia
          className={classes.mediaContainer}
          image={`https://image.tmdb.org/t/p/w500${posterUrl}`}
          title={title}
        >
          <IconButton
            onClick={handleOpen}
            className={classes.moreIconContainer}
          >
            <MoreIcon />
          </IconButton>
        </CardMedia>
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
          <Stack className={classes.logoContainer}>
            <ImdbRating rating={rating} />
            <RottenRating rating={rating} />
          </Stack>
          <Typography color={"primary.light"} variant="subtitle1">
            {genres?.join(", ")}
          </Typography>
        </CardContent>
      </Card>
      <MovieModal
        {...{ open, date, setOpen, title, overview, posterUrl, genres }}
      />
    </>
  );
};
