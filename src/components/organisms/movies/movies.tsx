import { Grid } from "@mui/material";
import { MoviePoster } from "../../molecules/index ";
import { MovieType, MoviesProps } from "../../../types";
import { quickStyles } from "../../../constants";
export default function Movies({ moviesData }: MoviesProps) {
  return (
    <Grid
      container
      rowGap={quickStyles.responsiveGap}
      columnSpacing={quickStyles.responsiveGrid}
    >
      {moviesData.map(({ results: page }) => {
        return page.map((movie: MovieType) => {
          return (
            <Grid item key={movie.id} xs={6} sm={6} md={4} lg={3}>
              <MoviePoster
                overview={movie.overview}
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
