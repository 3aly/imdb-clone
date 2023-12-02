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
type FlexDirection = "row" | "column";
type JustifyContent =
  | "space-between"
  | "space-around"
  | "flex-start"
  | "flex-end"
  | "center";
type AlignItems = "center" | "flex-end" | "flex-start";

export interface Layout {
  flexDirection?: FlexDirection;
  display?: "flex";
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  flex?: number;
  flexGrow?: number;
  alignSelf?: AlignItems;
  alignContent?: AlignItems;
}
