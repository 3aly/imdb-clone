import { Grid } from "@mui/material";
import { MoviePoster } from "../../molecules/index ";
import { MovieType, MoviesProps } from "../../../types";

export default function Movies({ moviesData }: MoviesProps) {
  return (
    <Grid container rowGap={4} columnSpacing={15}>
      {moviesData.map(({ results: page }) => {
        return page.map((movie: MovieType) => {
          return (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MoviePoster
                title={movie.original_title}
                posterUrl={movie.poster_path}
                rating={movie.vote_average}
                lang={movie.original_language}
                date={movie.release_date}
              />
            </Grid>
          );
        });
      })}
    </Grid>
  );
}
