import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { ImdbRating, RottenRating } from "../../atoms/index ";
import { useStyles } from "./MoviePoster.styles";
import { MoviePosterProps } from "../../../types";

export const MoviePoster = ({
  title,
  posterUrl,
  rating = 0,
  lang,
  date,
}: MoviePosterProps) => {
  const { classes } = useStyles();

  return (
    <Card className={classes.CardContainer}>
      <CardMedia
        className={classes.mediaContainer}
        image={`https://image.tmdb.org/t/p/w500${posterUrl}`}
        title={title}
      />
      <CardContent className={classes.cardContentContainer}>
        <Typography variant="subtitle1" component="div" color={"primary.light"}>
          {lang?.toUpperCase()}, {date?.substring(0, 4)}
        </Typography>

        <Typography variant="h6" component="div" className={classes.movieTitle}>
          {title}
        </Typography>
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
          <ImdbRating rating={rating} />
          <RottenRating rating={rating} />
        </Stack>
        <Box>
          <Typography
            variant="subtitle1"
            component="div"
            color={"primary.light"}
          >
            Animation, Action, Adventure
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
