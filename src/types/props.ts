import { Dispatch, SetStateAction } from "react";
import { MoviesDataType } from ".";

export type MoviePosterProps = {
  title?: string;
  posterUrl?: string;
  rating?: number;
  lang?: string;
  date?: string;
  overview?: string;
  genres?: Array<string>;
};
export interface MovieModalProps extends MoviePosterProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export type MoviesProps = {
  moviesData: Array<MoviesDataType>;
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
export type LoaderProps = {
  isLoading?: boolean;
};
