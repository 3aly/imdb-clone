import { Dispatch, SetStateAction } from "react";
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

export type SectionTitleProps = {
  title: string;
};
export type ImdbRatingProps = {
  rating: number;
};

export type SearchBarProps = {
  title?: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};
export type NavBarProps = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};
