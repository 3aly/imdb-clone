import { useState } from "react";

import "./App.css";
import { useFetchAllMovies, useSearchMovies } from "./hooks";
import { SectionTitle } from "./components/molecules/index ";
import {
  BottomFooter,
  MoviesList,
  NavBar,
} from "./components/organisms/index ";
import { Box, ThemeProvider } from "@mui/material";
import { MoviesDataType, StoreType } from "./types";
import { ProvidersWrapper } from "./ProvidersWrapper";
import { useStyles } from "./App.styles";
import { Loader, ScrollToTopButton } from "./components/atoms/index ";
import { useSelector } from "react-redux";
import { darkTheme, theme } from "./constants";
function App() {
  const { darkMode } = useSelector((state: StoreType) => state.theme);
  console.log("darkMode", darkMode);
  const [moviesData, setMoviesData] = useState<Array<MoviesDataType>>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { hasNextPage, isFetchingNextPage, fetchNextPage, isLoading } =
    useFetchAllMovies({
      onSuccess: (data: { pages: MoviesDataType[] }) => {
        setMoviesData(data.pages);
      },
      enabled: searchTerm?.length > 0 ? false : true,
    });

  const {
    hasNextPage: searchHasNextPage,
    isLoading: isSearchLoading,
    isFetchingNextPage: isFetchingNextSearchPage,
    fetchNextPage: fetchSearchNextPage,
  } = useSearchMovies(searchTerm, {
    onSuccess: (data: { pages: MoviesDataType[] }) => {
      setMoviesData(data.pages);
    },
    enabled: searchTerm?.length > 0 ? true : false,
  });
  function handleScroll() {
    const scrollTop = window.scrollY;
    const clientHeight = window.outerHeight;
    const scrollHeight = document.documentElement.scrollHeight; // Use documentElement.scrollHeight

    if (
      scrollTop + clientHeight >= scrollHeight - 1 &&
      (hasNextPage || searchHasNextPage)
    ) {
      if (searchTerm.length > 0) {
        fetchSearchNextPage();
      } else {
        fetchNextPage();
      }
    }
  }
  const { classes } = useStyles();

  window.addEventListener("scroll", handleScroll);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Box className={classes.main}>
        <NavBar {...{ setSearchTerm }} />
        <Box className={classes.container}>
          <SectionTitle
            title={
              searchTerm && !(isFetchingNextPage || isFetchingNextSearchPage)
                ? "Search Results..."
                : "Featured Movie"
            }
          />
          {isSearchLoading || isLoading ? (
            <>
              <Loader />
            </>
          ) : (
            <>
              <MoviesList {...{ moviesData }} />

              <Loader
                isLoading={isFetchingNextPage || isFetchingNextSearchPage}
              />
            </>
          )}
          <BottomFooter />

          <ScrollToTopButton />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const AppWithProvider = () => {
  return (
    <ProvidersWrapper>
      <App />
    </ProvidersWrapper>
  );
};

export default AppWithProvider;
