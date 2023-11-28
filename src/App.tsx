import { useEffect, useState } from "react";

import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { useFetchAllMovies } from "./hooks";
import { useInView } from "react-intersection-observer";
import { SearchBar } from "./components/molecules/index ";
import { useSearchMovies } from "./hooks/useSearchMovies/useSearchMovies";

function App() {
  const [MoviesData, setMoviesData] = useState<Array<Array>>([]);
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
  console.log(
    "hasNextPage || isFetchingNextPage",
    hasNextPage,
    isFetchingNextPage
  );
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    if (inView) {
      if (searchTerm.length > 0 && fetchSearchNextPage) {
        fetchSearchNextPage();
      } else if (hasNextPage) {
        fetchNextPage();
      }
    }
  }, [hasNextPage, inView, searchHasNextPage]);

  console.log("searchTerm", searchTerm);
  return (
    <>
      <SearchBar
        title="What do you want to watch?"
        setSearchTerm={setSearchTerm}
      />
      <h1>Vite + React</h1>
      <div className="card">
        {searchisFetchingNextPage || isFetchingNextPage ? (
          <>Loading</>
        ) : (
          MoviesData.map(({ results: page }) => {
            console.log("item", page);
            return page.map(
              (movie: { original_title: string; poster_path: string }) => {
                return (
                  <div className="card">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                    {movie.original_title}
                  </div>
                );
              }
            );
          })
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {isFetchingNextPage ? (
        "loading"
      ) : (
        <button
          ref={ref}
          title="fetchNextPage"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          load more
        </button>
      )}
    </>
  );
}

const AppWithProvider = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

export default AppWithProvider;
