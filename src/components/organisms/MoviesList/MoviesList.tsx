import { Grid } from "@mui/material";
import { MoviePoster } from "../../molecules/index ";
import { GenreType, MovieType, MoviesProps } from "../../../types";
import { quickStyles } from "../../../constants";
import { useFetchGenres } from "../../../hooks/useFetchGenres/useFetchGenres";
import { useState } from "react";
import { getGenreNameById } from "../../../utilities/utilities";
export default function MoviMoviesLists({ moviesData }: MoviesProps) {
  const [genres, setGenres] = useState<GenreType[]>([]);

  useFetchGenres({
    onSuccess: (data: { genres: GenreType[] }) => {
      setGenres(data.genres);
    },
    enabled: genres?.length === 0 ? true : false,
  });
  return (
    <Grid
      container
      rowGap={quickStyles.responsiveGap}
      columnSpacing={quickStyles.responsiveGrid}
    >
      {moviesData.map(({ results: page }) => {
        return page.map((movie: MovieType) => {
          const mappedMovieGenres = movie.genre_ids.map((genre) =>
            getGenreNameById(genre, genres)
          );
          return (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MoviePoster
                overview={movie.overview}
                title={movie.original_title}
                posterUrl={movie.poster_path}
                rating={movie.vote_average}
                lang={movie.original_language}
                date={movie.release_date}
                genres={mappedMovieGenres}
              />
            </Grid>
          );
        });
      })}
    </Grid>
  );
}
