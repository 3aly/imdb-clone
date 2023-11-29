import React from "react";

import styles from "./Movies.css";
import { Box, Grid, Typography } from "@mui/material";
import { MoviePoster } from "../../molecules/index ";

type MoviesProps = {
  prop?: string;
  MoviesData: [results: []];
};

export default function Movies({ MoviesData }: MoviesProps) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      sx={{ backgroundColor: "red" }}
      // direction="row"
      // justifyContent="flex-start"
      // alignItems="center"
    >
      <Typography>Feature Section</Typography>
      {MoviesData.map(({ results: page }, index) => {
        return page.map(
          (movie: {
            original_title: string;
            poster_path: string;
            vote_average: number;
            original_language: string;
            release_date: string;
          }) => {
            return (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <MoviePoster
                  title={movie.original_title}
                  posterUrl={movie.poster_path}
                  rating={movie.vote_average}
                  lang={movie.original_language}
                  date={movie.release_date}
                />
              </Grid>
            );
          }
        );
      })}
    </Grid>
  );
}
