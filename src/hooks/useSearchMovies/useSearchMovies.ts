import { useInfiniteQuery } from "react-query";
import { querySearchMovies } from "../../services";

export const useSearchMovies = (moviename: string, rest: any) => {
  const query = useInfiniteQuery({
    queryKey: ["querySearchMovies"],
    queryFn: ({ pageParam = 1 }) =>
      querySearchMovies({ page: pageParam, movie: moviename }),
    enabled: true,
    getNextPageParam: (lastPage: [], allPages: []) => {
      // const nextPage = lastPage.length > 0 ? allPages.length + 1 : null;
      return allPages.length + 1;
    },
    ...rest,
  });

  return query;
};
