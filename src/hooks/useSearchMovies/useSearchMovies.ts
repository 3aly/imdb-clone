import { useInfiniteQuery } from "react-query";
import { querySearchMovies } from "../../services";
import { MoviesDataType } from "../../types";

export const useSearchMovies = (
  moviename: string,
  {
    onSuccess,
    enabled,
  }: {
    enabled: boolean;
    onSuccess: (data: { pages: MoviesDataType[] }) => void;
  }
) => {
  const query = useInfiniteQuery({
    queryKey: ["querySearchMovies", moviename],
    queryFn: ({ pageParam = 1 }) =>
      querySearchMovies({ page: pageParam, movie: moviename }),
    getNextPageParam: (
      lastPage,
      allPages: MoviesDataType[][]
    ): number | undefined => {
      return allPages.length + 1;
    },
    refetchOnWindowFocus: false,

    onSuccess: onSuccess,
    enabled: enabled,
  });

  return query;
};
