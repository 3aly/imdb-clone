import { useEffect, useState } from "react";

import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { useFetchAllMovies } from "./hooks";
import { useInView } from "react-intersection-observer";
import { SearchBar, SectionTitle } from "./components/molecules/index ";
import { useSearchMovies } from "./hooks/useSearchMovies/useSearchMovies";
import { Footer, Movies, NavBar } from "./components/organisms/index ";
import { Box, Stack, ThemeProvider } from "@mui/material";
import { theme } from "./constants";

function App() {
  const [MoviesData, setMoviesData] = useState<Array<Array<any>>>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { hasNextPage, isFetchingNextPage, fetchNextPage } = useFetchAllMovies({
    onSuccess: (data: { pages: [] }) => {
      setMoviesData(data.pages);
    },
    enabled: searchTerm?.length > 0 ? false : true,
  });
  const {
    hasNextPage: searchHasNextPage,
    isFetchingNextPage: searchisFetchingNextPage,
    fetchNextPage: fetchSearchNextPage,
  } = useSearchMovies(searchTerm, {
    onSuccess: (data: { pages: [] }) => {
      setMoviesData(data.pages);
    },
    enabled: searchTerm?.length > 0 ? true : false,
  });
  const handleLoadMore = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior or link click

    fetchNextPage();
  };

  // const { ref, inView } = useInView({
  //   threshold: 0,
  // });
  // useEffect(() => {
  //   if (inView) {
  //     if (searchTerm.length > 0 && fetchSearchNextPage) {
  //       fetchSearchNextPage();
  //     } else if (hasNextPage) {
  //       fetchNextPage();
  //     }
  //   }
  // }, [hasNextPage, inView, searchHasNextPage]);

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <NavBar setSearchTerm={setSearchTerm} />
      <SectionTitle title={"Feture Section"} />
      <Movies {...{ MoviesData }} />
      <Footer />
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
