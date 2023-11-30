import { MoviesDataType } from ".";

export type MoviePosterProps = {
  title?: string;
  posterUrl?: string;
  rating?: number;
  lang?: string;
  date?: string;
};
export type MoviesProps = {
  prop?: string;
  MoviesData: Array<MoviesDataType>;
};
