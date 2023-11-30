import React from "react";

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

type MoviesProps = {
  title?: string;
  posterUrl?: string;
  rating?: number;
  lang?: string;
  date?: string;
};

export const MoviePoster = ({
  title,
  posterUrl,
  rating = 0,
  lang,
  date,
}: MoviesProps) => {
  const { classes } = useStyles();

  return (
    <Card className={classes.CardContainer}>
      <CardMedia
        sx={{ height: 370 }}
        image={`https://image.tmdb.org/t/p/w500${posterUrl}`}
        title={title}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 0,
          marginTop: 1,
        }}
      >
        {
          <Typography
            variant="subtitle1"
            component="div"
            color={"primary.light"}
          >
            {lang?.toUpperCase()}, {date?.substring(0, 4)}
          </Typography>
        }
        <Typography variant="h6" component="div">
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
