import { useState } from "react";

import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { useFetchAllMovies, useSearchMovies } from "./hooks";
import { SectionTitle } from "./components/molecules/index ";
import { Footer, Movies, NavBar } from "./components/organisms/index ";
import {
  Box,
  CircularProgress,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import { theme } from "./constants";
import { MoviesDataType } from "./types";
import { useStyles } from "./App.styles";
import { ScrollToTopButton } from "./components/atoms/index ";
function App() {
  const [MoviesData, setMoviesData] = useState<Array<MoviesDataType>>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { hasNextPage, isFetchingNextPage, fetchNextPage } = useFetchAllMovies({
    onSuccess: (data: { pages: [] }) => {
      setMoviesData(data.pages);
    },
    enabled: searchTerm?.length > 0 ? false : true,
  });

  const {
    hasNextPage: searchHasNextPage,
    isFetchingNextPage: isFetchingNextSearchPage,
    fetchNextPage: fetchSearchNextPage,
  } = useSearchMovies(searchTerm, {
    onSuccess: (data: { pages: [] }) => {
      setMoviesData(data.pages);
    },
    enabled: searchTerm?.length > 0 ? true : false,
  });

  const { classes } = useStyles();
  // const handleScroll = () => {
  //   const scrollTop = window.scrollY;
  //   const clientHeight = window.outerHeight;
  //   const documentHeight = document.body.scrollHeight;

  //   if (scrollTop + clientHeight >= documentHeight - 1) {
  //     console.log("first scroll", searchTerm.length);
  //     if (searchTerm.length > 0) {
  //       fetchSearchNextPage();
  //     } else {
  //       fetchNextPage();
  //     }
  //   }
  // };

  // window.addEventListener("scroll", handleScroll);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <NavBar setSearchTerm={setSearchTerm} />
      <Box className={classes.container}>
        <SectionTitle title={"Featured Movie"} />
        <Movies {...{ MoviesData }} />
        {(isFetchingNextPage || isFetchingNextSearchPage || true) && (
          <IconButton className={`${classes.loader} ${classes.loading}`}>
            <CircularProgress />
          </IconButton>
        )}
        <Footer />

        <ScrollToTopButton />
      </Box>
    </Box>
  );
}

const AppWithProvider = () => {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default AppWithProvider;
