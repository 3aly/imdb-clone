import React from "react";

import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { ImdbRating, RottenRating } from "../../atoms/index ";

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
  return (
    <Card
      sx={{
        maxWidth: 300,
      }}
    >
      <CardMedia
        sx={{ height: 300 }}
        image={`https://image.tmdb.org/t/p/w500${posterUrl}`}
        title={title}
      />

      <CardContent>
        {
          <Typography variant="h7" component="div">
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
      </CardContent>
    </Card>
  );
};
