export type MovieType = {
  id: number;
  original_title: string;
  poster_path: string;
  vote_average: number;
  original_language: string;
  release_date: string;
};
export type MoviesDataType = {
  results: MovieType[];
};
