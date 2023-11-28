import { useInfiniteQuery } from "react-query";
import { queryAllMovies } from "../../services";

export const useFetchAllMovies = (rest: any) => {
  const query = useInfiniteQuery({
    queryKey: ["queryAllMovies"],
    queryFn: ({ pageParam = 1 }) => queryAllMovies({ page: pageParam }),
    getNextPageParam: (lastPage: [], allPages: []) => {
      // const nextPage = lastPage.length > 0 ? allPages.length + 1 : null;
      return allPages.length + 1;
    },
    ...rest,
  });

  return query;
};
