export type MovieType = {
  id: number;
  original_title: string;
  poster_path: string;
  vote_average: number;
  original_language: string;
  overview: string;
  release_date: string;
  genre_ids: [];
};
export type MoviesDataType = {
  results: MovieType[];
};
