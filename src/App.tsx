import { useEffect, useState } from "react";

import "./App.css";
import { useFetchAllMovies, useSearchMovies } from "./hooks";
import { SectionTitle } from "./components/molecules/index ";
import { Footer, Movies, NavBar } from "./components/organisms/index ";
import { Box } from "@mui/material";
import { MoviesDataType } from "./types";
import { ProvidersWrapper } from "./ProvidersWrapper";
import { useStyles } from "./App.styles";
import { Loader, ScrollToTopButton } from "./components/atoms/index ";
function App() {
  const [moviesData, setMoviesData] = useState<Array<MoviesDataType>>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);

  const { hasNextPage, isFetchingNextPage, fetchNextPage, isLoading } =
    useFetchAllMovies({
      onSuccess: (data: { pages: [] }) => {
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
    onSuccess: (data: { pages: [] }) => {
      setMoviesData(data.pages);
    },
    enabled: searchTerm?.length > 0 ? true : false,
  });

  const { classes } = useStyles();
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const clientHeight = window.outerHeight;
    const documentHeight = document.body.scrollHeight;

    if (
      scrollTop + clientHeight >= documentHeight - 1 &&
      (hasNextPage || searchHasNextPage)
    ) {
      if (searchTerm.length > 0) {
        fetchSearchNextPage();
      } else {
        fetchNextPage();
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return;
  }, []);
  return (
    <Box className={classes.main}>
      <NavBar {...{ setSearchTerm, isScrolled }} />
      <Box className={classes.container}>
        {isSearchLoading || isLoading ? (
          <>
            <Loader />
          </>
        ) : (
          <>
            <SectionTitle
              title={
                searchTerm && !(isFetchingNextPage || isFetchingNextSearchPage)
                  ? "Search Results..."
                  : "Featured Movie"
              }
            />
            <Movies {...{ moviesData }} />
            <Loader
              isLoading={isFetchingNextPage || isFetchingNextSearchPage}
            />
            <Footer />

            <ScrollToTopButton />
          </>
        )}
      </Box>
    </Box>
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
